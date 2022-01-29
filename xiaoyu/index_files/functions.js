/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth &amp;&amp; newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '&lt;') {
					progress = str.indexOf('&gt;', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress &amp; 1 ? '_' : ''));
				if (progress &gt;= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours &lt; 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes &lt; 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds &lt; 10) {
		seconds = "0" + seconds;
	}
	var result = "第 <span class="\&quot;digit\&quot;">" + days + "</span> 天 <span class="\&quot;digit\&quot;">" + hours + "</span> 小时 <span class="\&quot;digit\&quot;">" + minutes + "</span> 分钟 <span class="\&quot;digit\&quot;">" + seconds + "</span> 秒"; 
	$("#clock").html(result);
}
<script>
        document.querySelectorAll('.github-emoji')
          .forEach(el => {
            if (!el.dataset.src) { return; }
            const img = document.createElement('img');
            img.style = 'display:none !important;';
            img.src = el.dataset.src;
            img.addEventListener('error', () => {
              img.remove();
              el.style.color = 'inherit';
              el.style.backgroundImage = 'none';
              el.style.background = 'none';
            });
            img.addEventListener('load', () => {
              img.remove();
            });
            document.body.appendChild(img);
          });
      </script>