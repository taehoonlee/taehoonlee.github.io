/*
Github Graph Embedding by @shellscape
https://gist.github.com/shellscape/a2ec2f0432a6383b94d18cb4417a1d10#file-github-graph-js
*/

var proxy = 'https://urlreq.appspot.com/req?method=GET&url=',
  url = proxy + 'https://github.com/taehoonlee',
  colors = {
    'eeeeee': 'github-graph-none',
    'd6e685': 'github-graph-litte',
    '8cc665': 'github-graph-some',
    '44a340': 'github-graph-more',
    '1e6823': 'github-graph-most'
  };

document.addEventListener('DOMContentLoaded', function () {

  fetch(url)
    .then(function responseThen (response) {
      return response.text();
    })
    .then(function fetchThen (body) {
      var wrapper = document.createElement('div'),
        container = document.querySelector('#github-graph'),
        graph,
        gs,
        fill,
        index;

      wrapper.innerHTML = body;

      graph = wrapper.querySelector('svg.js-calendar-graph-svg');

      for(var rect of graph.querySelectorAll('rect')) {
        fill = rect.getAttribute('fill').substring(1);

        if (colors[fill]) {
          rect.classList.add(colors[fill]);
        }
      }

      graph.setAttribute('version', '1.1');
      graph.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      graph.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
      graph.setAttribute('xml:space', 'preserve');

      container.innerHTML = graph.outerHTML;
    });

});
