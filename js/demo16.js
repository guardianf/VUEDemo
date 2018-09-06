let app1 = new Vue({
    el: '#app-1',
    data: {
        items: [
            '数字和运算',
            '颜色的显示',
            'SVG节点的位置',
            '元素的大小和其他的属性'
        ]
    }
});

var Color = net.brehaut.Color;

let app2 = new Vue({
    el: '#app-2',
    data(){
        var defaultSides = 10;
        var stats = Array.apply(null, {
            length: defaultSides
        }).map(function(){
            return 100;
        })
        return {
            number: 0,
            tweenedNumber: 0,
            colorQuery: '',
            color: {
                red: 0,
                green: 0,
                blue: 0,
                alpha: 1
            },
            tweenedColor: {},
            stats: stats,
            points: generatePoints(stats),
            sides: 4,
            minRadius: 20,
            updateInterval: 500
        }
    },
    created(){
        this.tweenedColor = Object.assign({}, this.color)
    },
    mounted(){
        this.resetInterval();
    },
    computed: {
        animatedNumber() {
            return this.tweenedNumber.toFixed(0);
        },
        tweenedCSSColor(){
            return new Color({
                red: this.tweenedColor.red,
                green: this.tweenedColor.green,
                blue: this.tweenedColor.blue,
                alpha: this.tweenedColor.alpha,
            }).toCSS();
        }
    },
    watch: {
        number(newValue){
            TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue});
        },
        color(){
            function animate(){
                if(TWEEN.update()){
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween(this.tweenedColor)
                .to(this.color, 750)
                .start()
            
            animate();
        },
        sides(newSides, oldSides){
            var sideDifference = newSides - oldSides
            if(sideDifference > 0) {
                for(var i=1;i<=sideDifference;i++){
                    this.stats.push(this.newRandomValue())
                }
            } else {
                var absoluteSidesDifference = Math.abs(sideDifference)
                for(var i = 1;i<=absoluteSidesDifference;i++){
                    this.stats.shift();
                }
            }
        },
        stats(newStats){
            TweenLite.to(this.$data, this.updateInterval/1000,{
                points: generatePoints(newStats)
            })
        },
        updateInterval(){
            this.resetInterval()
        }
    },
    methods: {
        updateColor(){
            this.color = new Color(this.colorQuery).toRGB();
            this.colorQuery = '';
        },
        newRandomValue(){
            return Math.ceil(this.minRadius + Math.random() * (100 - this.minRadius))
        },
        randomizeStats(){
            var vm = this;
            this.stats = this.stats.map(function(){
                return vm.newRandomValue();
            })
        },
        resetInterval(){
            var vm = this;
            clearInterval(this.interval)
            this.randomizeStats();
            this.interval = setInterval(function(){
                vm.randomizeStats()
            }, this.updateInterval);
        }
    }
})

function valueToPoint(value, index, total){
    var x = 0;
    var y = -value * 0.9
    var angle = Math.PI * 2 / total * index;

    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    var tx = x * cos - y * sin + 100;
    var ty = x * sin + y * cos + 100;
    return {x:tx, y: ty}
}
function generatePoints(stats){
    var total = stats.length
    return stats.map(function(stat, index){
        var point = valueToPoint(stat, index, total)
        return point.x + ',' + point.y
    }).join(' ')
}

Vue.component('animated-integer', {
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    template: '<span>{{ tweeningValue }}</span>',
    data(){
        return {
            tweeningValue: 0
        }
    },
    watch: {
        value(newValue, oldValue){
            this.tween(oldValue, newValue)
        }
    },
    mounted(){
        this.tween(0, this.value)
    },
    methods: {
        tween(startValue, endValue){
            var vm = this;
            function animate() {
                if(TWEEN.update()) {
                    requestAnimationFrame(animate)
                }   
            }
            new TWEEN.Tween({tweeningValue: startValue})
                .to({tweeningValue: endValue}, 500)
                .onUpdate(function(){
                    vm.tweeningValue = this.tweeningValue.toFixed(0)
                })
                .start()

            animate();
        }
    }
});

let app3 = new Vue({
    el: '#app-3',
    data: {
        firstNumber: 20,
        secondNumber: 40
    },
    computed: {
        result(){
            return this.firstNumber + this.secondNumber
        }
    }
})