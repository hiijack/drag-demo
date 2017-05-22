/**
 * use mouse event to drag dom
 */
(function() {
    var box = document.querySelector('#box');
    
    var getNum = function(p) {
        return Number(p.substring(0, p.indexOf('px')));
    }

    function DragWrapper(target) {
        this.init(target);
    }

    DragWrapper.prototype = {
        
        init: function(target) {
            target.addEventListener('mousedown', this.onMousedown.bind(this));

            this.onMousemove = this.onMousemove.bind(this);
            this.onMouseup = this.onMouseup.bind(this);

            this.target = target;
            this.originalX = getNum(target.style.left);
            this.originalY = getNum(target.style.top);
        },

        onMousedown: function(e) {
            this.startX = e.clientX;
            this.startY = e.clientY;

            document.addEventListener('mousemove', this.onMousemove);
            document.addEventListener('mouseup', this.onMouseup);
        },
        
        onMousemove: function(e) {
            this.nextX = this.originalX + (e.clientX - this.startX);
            this.nextY = this.originalY + (e.clientY - this.startY);

            this.target.style.left = this.nextX + 'px';
            this.target.style.top = this.nextY + 'px';
        },

        onMouseup: function(e) {
            document.removeEventListener('mousemove', this.onMousemove);
            this.originalX = this.nextX;
            this.originalY = this.nextY;
        }
    }

    new DragWrapper(box);

})();
