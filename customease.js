var CustomEase = (function(){
    var easings = {};

    function create(name, points){
        var sections = points.length,
            sectionStep = 1 / sections,
            curves = [],
            i;

        for(i = 0; i < sections; i++){
            curves.push((function(p){
                return function(t){
                    return Math.pow(1 - t, 2) * p.s + 2 * t * (1 - t) * p.cp + Math.pow(t, 2) * p.e;
                }
            })(points[i]));
        }

        easings[name] = function(t){
            var curveIndex = Math.floor(t / sectionStep),
                curveProgress = t % sectionStep / sectionStep;

            return curves[curveIndex](curveProgress);
        };

        easings[name].getRatio = function(t){
            return easings[name](t);
        };
    }

    function byName(name){
        return easings[name];
    }

    return {
        create: create,
        byName: byName
    };
})();