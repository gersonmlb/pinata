var contador = 0;

function cambiar() {

    if (contador == 2) {

        document.getElementById('contador7').innerHTML = "<button id='id1' onclick='sonido.pause()' class='btn video' data-toggle='modal' data-target='#exampleModal' data-whatever='videos/vid_hannia.mp4' data-name='Hannia'></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Gift of ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else if (contador == 4) {
        document.getElementById('contador3').innerHTML = "<button id='id2' onclick='sonido.pause()' class='btn video' data-toggle='modal' data-target='#exampleModal' data-whatever='videos/vid_jose.mp4' data-name='Jose'></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Gift of ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else if (contador == 6) {
        document.getElementById('contador4').innerHTML = "<button id='id3' onclick='sonido.pause()' class='btn video' data-toggle='modal' data-target='#exampleModal' data-whatever='videos/vid_luisa.mp4' data-name='Luisa'></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Gift of ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else if (contador == 8) {
        document.getElementById('contador5').innerHTML = "<button id='id4' onclick='sonido.pause()' class='btn video' data-toggle='modal' data-target='#exampleModal' data-whatever='videos/vid_yuli.mp4' data-name='Yuli' ></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Gift of ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else if (contador == 10) {
        document.getElementById('contador6').innerHTML = "<button id='id5' onclick='sonido.pause()' class='btn video ' data-toggle='modal' data-target='#exampleModal' data-whatever='videos/vid_jose_perez.mp4' data-name='Jose Perez' ></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Gift of ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;


    } else if (contador == 12) {
        document.getElementById('contador2').innerHTML = "<button id='id6' onclick='sonido.pause()' class='btn video' data-toggle='modal' data-target='#exampleModal' data-whatever='videos/vid_elo.mp4' data-name='Elo'></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Gift of ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else if (contador == 14) {
        document.getElementById('contador9').innerHTML = "<button id='id7' onclick='sonido.pause()' class='btn video ' data-toggle='modal' data-target='#exampleModal' data-whatever='videos/vid_juan.MP4' data-name='Juan'></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Gift of ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else if (contador == 16) {
        document.getElementById('contador10').innerHTML = "<button id='id8' onclick='sonido.pause()' class='btn video ' data-toggle='modal' data-target='#exampleModal' data-whatever='videos/vid_melky.mp4' data-name='Melky' ></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Gift of ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else if (contador == 18) {
        document.getElementById('contador11').innerHTML = "<button id='id10' onclick='sonido.pause()' class='btn video ' data-toggle='modal' data-target='#exampleModal' data-whatever='videos/vid_velentina.mp4' data-name='Valentina'></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Gift of ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else if (contador == 20) {
        document.getElementById('contador12').innerHTML = "<button id='id9' onclick='sonido.pause()' class='btn video ' data-toggle='modal' data-target='#exampleModal' data-whatever='videos/vid_winnie.mp4' data-name='Winnie'></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Gift of ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else {
        contador += 1;

    }
}


window.confettiKit = function(t) {
    var e = this;
    e.version = "1.1.0", e.config = { colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"], el: "body", elements: { confetti: { direction: "down", rotation: !0 }, star: { count: 15, direction: "up", rotation: !0 }, ribbon: { count: 10, direction: "down", rotation: !0 } }, confettiCount: 75, x: 0, y: 0, angle: 90, decay: .9, spread: 45, startVelocity: 45, position: null };
    for (var n in t) e.config[n] = t[n];
    var o = e.config;
    e.renderStar = function(t, e) { return '<div style="width:' + t + "px;fill:" + e + '"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 75 75" ><title>star</title><polygon points="37.5 18.411 56.342 8.505 52.743 29.486 67.987 44.345 46.921 47.406 37.5 66.495 28.079 47.406 7.013 44.345 22.257 29.486 18.658 8.505 37.5 18.411" /></svg></div>' }, e.renderRibbon = function(t, e) { return '<div style="width:' + t + "px;stroke:" + e + '"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 75 75" ><path d="m24.453125,3.774663c0.193689,-0.193689 0.743394,-0.671232 1.743199,-0.968444c0.94668,-0.28142 2.333125,-0.396423 4.648531,-0.193689c3.330842,0.291645 6.861105,1.826145 7.941241,2.711643c1.270993,1.041963 2.540047,2.890054 3.873776,4.84222c1.575816,2.306511 2.817321,4.217926 3.486399,6.004353c0.924008,2.467092 1.294523,4.846337 1.162133,6.972797c-0.097034,1.558552 -0.857702,3.568397 -1.743199,4.648531c-1.041962,1.270991 -2.406342,2.560381 -4.261154,3.29271c-2.228395,0.87983 -4.466154,0.810093 -6.779108,0.581066c-1.965634,-0.194637 -3.568395,-0.857702 -4.648531,-1.743199c-0.211833,-0.17366 -0.533673,-0.606635 -0.968444,-1.355822c-0.350522,-0.604015 -0.818174,-1.325931 -0.774755,-1.936888c0.030701,-0.432012 0.413426,-1.271858 0.968444,-1.936888c0.620528,-0.743524 1.284527,-0.912889 1.936888,-1.162133c1.279386,-0.488809 3.691399,-0.422715 6.004353,-0.193689c1.965634,0.194637 3.31667,0.736573 4.261154,1.355822c1.393387,0.91357 2.991613,1.63628 4.454843,2.905332c1.03466,0.897355 2.019835,2.599953 2.905332,3.680087c0.694641,0.847327 1.193205,1.542398 1.355822,2.324266c0.239907,1.153479 0.535004,2.743879 0,6.58542c-0.356447,2.55943 -1.282205,4.880811 -2.324266,6.779108c-1.086946,1.980061 -2.178706,3.113269 -3.486399,3.873776c-1.43055,0.831959 -3.243129,1.2571 -5.810664,1.54951c-2.886673,0.328756 -6.579154,-0.410019 -7.941241,-0.774755c-0.771421,-0.20657 -1.049573,-0.27482 -1.355822,-0.581066c-0.612498,-0.612498 -0.774755,-1.54951 -0.774755,-2.517955c0,-0.774755 -0.059414,-1.775875 0.387378,-2.517955c0.859423,-1.427419 2.413861,-2.195096 4.067465,-2.711643c1.307291,-0.408368 2.573952,-0.18426 3.486399,0.193689c1.29039,0.534498 3.294961,1.907296 4.648531,3.29271c1.164388,1.191782 1.717201,2.44142 2.711643,4.84222c0.703176,1.697624 1.065142,3.478355 1.162133,5.229598c0.10711,1.933923 0.089293,3.896049 -0.387378,5.616976c-0.326992,1.180547 -0.698642,2.16461 -1.162133,3.099021c-0.50186,1.011759 -1.936888,2.905332 -3.29271,4.261154c-1.162133,1.162133 -2.324266,1.54951 -3.29271,1.936888l-0.581066,0.193689" id="svg_6" stroke-width="4" fill="none"/></svg></div>' }, e.customRender = function(t, e, n, o, i) { return "text" == e ? '<p style="color:' + n + ";font-size:" + i + 'px">' + t + "</p>" : "svg" == e ? '<div style="width:' + o + "px;fill:" + n + '">' + t + "</div>" : "image" == e ? '<img style="width:' + o + 'px;" src="' + t + '"/>' : void 0 }, e.createElements = function(t, n) {
        var i = o.elements.star ? o.elements.star.count : 0,
            s = o.elements.ribbon ? o.elements.ribbon.count : 0,
            c = [];
        if (o.elements.custom && o.elements.custom.length > -1) { console.log(o.elements.custom.length); for (var r = 0; r <= o.elements.custom.length; r++) o.elements.custom[r] && c.push({ count: o.elements.custom[r].count }) }
        for (var l = 0, a = [], d = 0; d <= n; d++) {
            var m = document.createElement("div");
            m.classList = ["fetti"];
            var u = o.colors[d % o.colors.length],
                h = Math.floor(10 * Math.random() + 1) + "px",
                f = Math.floor(10 * Math.random() + 1) + "px";
            if (m.style.width = h, m.style.height = f, m.style.position = "fixed", m.style.zIndex = "999999", o.elements.star && i > 0) {
                var y = i - 1;
                y <= o.elements.star.count && y >= 0 && (m.style["background-color"] = "", m.innerHTML = e.renderStar(25, u), m.direction = o.elements.star.direction, m.rotation = o.elements.star.rotation, i = y)
            } else if (o.elements.ribbon && s > 0) {
                var p = s - 1;
                p <= o.elements.ribbon.count && p >= 0 && (m.style["background-color"] = "", m.innerHTML = e.renderRibbon(30, u), m.direction = o.elements.ribbon.direction, m.rotation = o.elements.ribbon.rotation, s = p)
            } else if (o.elements.custom && o.elements.custom.length > -1 && c[l]) {
                if (c[l]) {
                    var g = c[l].count - 1;
                    if (g <= c[l].count && g <= c[l].count && g >= 0) {
                        m.style["background-color"] = "";
                        var v = o.elements.custom[l].contentType,
                            w = o.elements.custom[l].content,
                            b = o.elements.custom[l].width,
                            x = o.elements.custom[l].textSize;
                        m.innerHTML = e.customRender(w, v, u, b, x), m.direction = o.elements.custom[l].direction, m.rotation = o.elements.custom[l].rotation, c[l].count = g, 0 == c[l].count && l++
                    }
                }
            } else h == f ? (m.style["background-color"] = u, m.style.borderRadius = "50%") : m.style["background-color"] = u, m.direction = o.elements.confetti && o.elements.confetti.direction ? o.elements.confetti.direction : "down", m.rotation = !o.elements.confetti || !o.elements.confetti.rotation || o.elements.confetti.rotation;
            t.insertBefore(m, t.firstChild), a.push(m)
        }
        return a
    }, e.randomPhysics = function(t, e, n, o, i) {
        var s = n * (Math.PI / 180),
            c = o * (Math.PI / 180);
        return { x: t, y: e, wobble: 10 * Math.random(), velocity: .3 * i + Math.random() * i, angle2D: -s + (.3 * c - Math.random() * c), angle3D: -Math.PI / 4 + Math.random() * (Math.PI / 2), tiltAngle: Math.random() * Math.PI }
    }, e.updateFetti = function(t, e, n) {
        t.physics.x += Math.cos(t.physics.angle2D) * t.physics.velocity, t.physics.y += Math.sin(t.physics.angle2D) * t.physics.velocity, t.physics.z += Math.sin(t.physics.angle3D) * t.physics.velocity, t.physics.wobble += .1, t.physics.velocity *= n, "up" == t.element.direction ? t.physics.y -= 3 : t.physics.y += 3, t.physics.tiltAngle += .1;
        var o, i = t.physics.x,
            s = t.physics.y,
            c = t.physics.tiltAngle,
            r = t.physics.wobble,
            l = i + 10 * Math.cos(r),
            a = s + 10 * Math.sin(r);
        o = t.element.rotation ? "translate3d(" + l + "px, " + a + "px, 0) rotate3d(1, 1, 1, " + c + "rad)" : "translate3d(" + l + "px, " + a + "px, 0)", t.element.style.transform = o, t.element.style.opacity = 1 - e
    }, e.animate = function(t, n, o) {
        var i = 200,
            s = 0;
        requestAnimationFrame(function c() { n.forEach(function(t) { e.updateFetti(t, s / i, o) }), (s += 1) < i ? requestAnimationFrame(c) : n.forEach(function(e) { t.removeChild(e.element) }) })
    }, e.confetti = function(t, n, i) {
        angle = o.angle, decay = o.decay, spread = o.spread, startVelocity = o.startVelocity, elementCount = o.confettiCount;
        var s = [];
        e.createElements(t, elementCount).map(function(t) {
            var o = { element: t, physics: e.randomPhysics(n, i, angle, spread, startVelocity) };
            s.push(o)
        }), e.animate(t, s, decay)
    };
    var i = document.querySelector(o.el);
    if (null != o.position) {
        if ("bottomLeftRight" == o.position) o.angle = 45, e.confetti(i, 0, window.innerHeight - 200), (s = t).position = null, s.angle = 135, s.x = window.innerWidth, s.y = window.innerHeight - 200, new confettiKit(s);
        else if ("topLeftRight" == o.position) {
            var s;
            o.angle = 340, e.confetti(i, 0, 0), (s = t).position = null, s.angle = 190, s.x = window.innerWidth, s.y = 0, new confettiKit(s)
        }
    } else e.confetti(i, o.x, o.y)
}; /*********************************************************************************************************************************/




// randomColor by David Merfield under the CC0 license
// https://github.com/davidmerfield/randomColor/

;
(function(root, factory) {

    // Support CommonJS
    if (typeof exports === 'object') {
        var randomColor = factory();

        // Support NodeJS & Component, which allow module.exports to be a function
        if (typeof module === 'object' && module && module.exports) {
            exports = module.exports = randomColor;
        }

        // Support CommonJS 1.1.1 spec
        exports.randomColor = randomColor;

        // Support AMD
    } else if (typeof define === 'function' && define.amd) {
        define([], factory);

        // Support vanilla script loading
    } else {
        root.randomColor = factory();
    }

}(this, function() {

    // Seed to get repeatable colors
    var seed = null;

    // Shared color dictionary
    var colorDictionary = {};

    // Populate the color dictionary
    loadColorBounds();

    var randomColor = function(options) {

        options = options || {};

        // Check if there is a seed and ensure it's an
        // integer. Otherwise, reset the seed value.
        if (options.seed !== undefined && options.seed !== null && options.seed === parseInt(options.seed, 10)) {
            seed = options.seed;

            // A string was passed as a seed
        } else if (typeof options.seed === 'string') {
            seed = stringToInteger(options.seed);

            // Something was passed as a seed but it wasn't an integer or string
        } else if (options.seed !== undefined && options.seed !== null) {
            throw new TypeError('The seed value must be an integer or string');

            // No seed, reset the value outside.
        } else {
            seed = null;
        }

        var H, S, B;

        // Check if we need to generate multiple colors
        if (options.count !== null && options.count !== undefined) {

            var totalColors = options.count,
                colors = [];

            options.count = null;

            while (totalColors > colors.length) {

                // Since we're generating multiple colors,
                // incremement the seed. Otherwise we'd just
                // generate the same color each time...
                if (seed && options.seed) options.seed += 1;

                colors.push(randomColor(options));
            }

            options.count = totalColors;

            return colors;
        }

        // First we pick a hue (H)
        H = pickHue(options);

        // Then use H to determine saturation (S)
        S = pickSaturation(H, options);

        // Then use S and H to determine brightness (B).
        B = pickBrightness(H, S, options);

        // Then we return the HSB color in the desired format
        return setFormat([H, S, B], options);
    };

    function pickHue(options) {

        var hueRange = getHueRange(options.hue),
            hue = randomWithin(hueRange);

        // Instead of storing red as two seperate ranges,
        // we group them, using negative numbers
        if (hue < 0) { hue = 360 + hue; }

        return hue;

    }

    function pickSaturation(hue, options) {

        if (options.hue === 'monochrome') {
            return 0;
        }

        if (options.luminosity === 'random') {
            return randomWithin([0, 100]);
        }

        var saturationRange = getSaturationRange(hue);

        var sMin = saturationRange[0],
            sMax = saturationRange[1];

        switch (options.luminosity) {

            case 'bright':
                sMin = 55;
                break;

            case 'dark':
                sMin = sMax - 10;
                break;

            case 'light':
                sMax = 55;
                break;
        }

        return randomWithin([sMin, sMax]);

    }

    function pickBrightness(H, S, options) {

        var bMin = getMinimumBrightness(H, S),
            bMax = 100;

        switch (options.luminosity) {

            case 'dark':
                bMax = bMin + 20;
                break;

            case 'light':
                bMin = (bMax + bMin) / 2;
                break;

            case 'random':
                bMin = 0;
                bMax = 100;
                break;
        }

        return randomWithin([bMin, bMax]);
    }

    function setFormat(hsv, options) {

        switch (options.format) {

            case 'hsvArray':
                return hsv;

            case 'hslArray':
                return HSVtoHSL(hsv);

            case 'hsl':
                var hsl = HSVtoHSL(hsv);
                return 'hsl(' + hsl[0] + ', ' + hsl[1] + '%, ' + hsl[2] + '%)';

            case 'hsla':
                var hslColor = HSVtoHSL(hsv);
                var alpha = options.alpha || Math.random();
                return 'hsla(' + hslColor[0] + ', ' + hslColor[1] + '%, ' + hslColor[2] + '%, ' + alpha + ')';

            case 'rgbArray':
                return HSVtoRGB(hsv);

            case 'rgb':
                var rgb = HSVtoRGB(hsv);
                return 'rgb(' + rgb.join(', ') + ')';

            case 'rgba':
                var rgbColor = HSVtoRGB(hsv);
                var alpha = options.alpha || Math.random();
                return 'rgba(' + rgbColor.join(', ') + ', ' + alpha + ')';

            default:
                return HSVtoHex(hsv);
        }

    }

    function getMinimumBrightness(H, S) {

        var lowerBounds = getColorInfo(H).lowerBounds;

        for (var i = 0; i < lowerBounds.length - 1; i++) {

            var s1 = lowerBounds[i][0],
                v1 = lowerBounds[i][1];

            var s2 = lowerBounds[i + 1][0],
                v2 = lowerBounds[i + 1][1];

            if (S >= s1 && S <= s2) {

                var m = (v2 - v1) / (s2 - s1),
                    b = v1 - m * s1;

                return m * S + b;
            }

        }

        return 0;
    }

    function getHueRange(colorInput) {

        if (typeof parseInt(colorInput) === 'number') {

            var number = parseInt(colorInput);

            if (number < 360 && number > 0) {
                return [number, number];
            }

        }

        if (typeof colorInput === 'string') {

            if (colorDictionary[colorInput]) {
                var color = colorDictionary[colorInput];
                if (color.hueRange) { return color.hueRange; }
            } else if (colorInput.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
                var hue = HexToHSB(colorInput)[0];
                return [hue, hue];
            }
        }

        return [0, 360];

    }

    function getSaturationRange(hue) {
        return getColorInfo(hue).saturationRange;
    }

    function getColorInfo(hue) {

        // Maps red colors to make picking hue easier
        if (hue >= 334 && hue <= 360) {
            hue -= 360;
        }

        for (var colorName in colorDictionary) {
            var color = colorDictionary[colorName];
            if (color.hueRange &&
                hue >= color.hueRange[0] &&
                hue <= color.hueRange[1]) {
                return colorDictionary[colorName];
            }
        }
        return 'Color not found';
    }

    function randomWithin(range) {
        if (seed === null) {
            return Math.floor(range[0] + Math.random() * (range[1] + 1 - range[0]));
        } else {
            //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
            var max = range[1] || 1;
            var min = range[0] || 0;
            seed = (seed * 9301 + 49297) % 233280;
            var rnd = seed / 233280.0;
            return Math.floor(min + rnd * (max - min));
        }
    }

    function HSVtoHex(hsv) {

        var rgb = HSVtoRGB(hsv);

        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? '0' + hex : hex;
        }

        var hex = '#' + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);

        return hex;

    }

    function defineColor(name, hueRange, lowerBounds) {

        var sMin = lowerBounds[0][0],
            sMax = lowerBounds[lowerBounds.length - 1][0],

            bMin = lowerBounds[lowerBounds.length - 1][1],
            bMax = lowerBounds[0][1];

        colorDictionary[name] = {
            hueRange: hueRange,
            lowerBounds: lowerBounds,
            saturationRange: [sMin, sMax],
            brightnessRange: [bMin, bMax]
        };

    }

    function loadColorBounds() {

        defineColor(
            'monochrome',
            null, [
                [0, 0],
                [100, 0]
            ]
        );

        defineColor(
            'red', [-26, 18], [
                [20, 100],
                [30, 92],
                [40, 89],
                [50, 85],
                [60, 78],
                [70, 70],
                [80, 60],
                [90, 55],
                [100, 50]
            ]
        );

        defineColor(
            'orange', [19, 46], [
                [20, 100],
                [30, 93],
                [40, 88],
                [50, 86],
                [60, 85],
                [70, 70],
                [100, 70]
            ]
        );

        defineColor(
            'yellow', [47, 62], [
                [25, 100],
                [40, 94],
                [50, 89],
                [60, 86],
                [70, 84],
                [80, 82],
                [90, 80],
                [100, 75]
            ]
        );

        defineColor(
            'green', [63, 178], [
                [30, 100],
                [40, 90],
                [50, 85],
                [60, 81],
                [70, 74],
                [80, 64],
                [90, 50],
                [100, 40]
            ]
        );

        defineColor(
            'blue', [179, 257], [
                [20, 100],
                [30, 86],
                [40, 80],
                [50, 74],
                [60, 60],
                [70, 52],
                [80, 44],
                [90, 39],
                [100, 35]
            ]
        );

        defineColor(
            'purple', [258, 282], [
                [20, 100],
                [30, 87],
                [40, 79],
                [50, 70],
                [60, 65],
                [70, 59],
                [80, 52],
                [90, 45],
                [100, 42]
            ]
        );

        defineColor(
            'pink', [283, 334], [
                [20, 100],
                [30, 90],
                [40, 86],
                [60, 84],
                [80, 80],
                [90, 75],
                [100, 73]
            ]
        );

    }

    function HSVtoRGB(hsv) {

        // this doesn't work for the values of 0 and 360
        // here's the hacky fix
        var h = hsv[0];
        if (h === 0) { h = 1; }
        if (h === 360) { h = 359; }

        // Rebase the h,s,v values
        h = h / 360;
        var s = hsv[1] / 100,
            v = hsv[2] / 100;

        var h_i = Math.floor(h * 6),
            f = h * 6 - h_i,
            p = v * (1 - s),
            q = v * (1 - f * s),
            t = v * (1 - (1 - f) * s),
            r = 256,
            g = 256,
            b = 256;

        switch (h_i) {
            case 0:
                r = v;
                g = t;
                b = p;
                break;
            case 1:
                r = q;
                g = v;
                b = p;
                break;
            case 2:
                r = p;
                g = v;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = v;
                break;
            case 4:
                r = t;
                g = p;
                b = v;
                break;
            case 5:
                r = v;
                g = p;
                b = q;
                break;
        }

        var result = [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
        return result;
    }

    function HexToHSB(hex) {
        hex = hex.replace(/^#/, '');
        hex = hex.length === 3 ? hex.replace(/(.)/g, '$1$1') : hex;

        var red = parseInt(hex.substr(0, 2), 16) / 255,
            green = parseInt(hex.substr(2, 2), 16) / 255,
            blue = parseInt(hex.substr(4, 2), 16) / 255;

        var cMax = Math.max(red, green, blue),
            delta = cMax - Math.min(red, green, blue),
            saturation = cMax ? (delta / cMax) : 0;

        switch (cMax) {
            case red:
                return [60 * (((green - blue) / delta) % 6) || 0, saturation, cMax];
            case green:
                return [60 * (((blue - red) / delta) + 2) || 0, saturation, cMax];
            case blue:
                return [60 * (((red - green) / delta) + 4) || 0, saturation, cMax];
        }
    }

    function HSVtoHSL(hsv) {
        var h = hsv[0],
            s = hsv[1] / 100,
            v = hsv[2] / 100,
            k = (2 - s) * v;

        return [
            h,
            Math.round(s * v / (k < 1 ? k : 2 - k) * 10000) / 100,
            k / 2 * 100
        ];
    }

    function stringToInteger(string) {
        var total = 0
        for (var i = 0; i !== string.length; i++) {
            if (total >= Number.MAX_SAFE_INTEGER) break;
            total += string.charCodeAt(i)
        }
        return total
    }

    return randomColor;
}));


function accionPlay() {
    var reproducir = new Audio();
    reproducir.src = "music/sonido.mp3";
    reproducir.play();
}

function iniciar() {
    button = document.querySelectorAll("button");
    button[0].addEventListener("click", accionPlay, false);
}
window.addEventListener("load", iniciar, false);

$(document).ready(function() {
    var sonido = document.getElementById("sonido");
    $("#granregalo").hide();
    $('#myModal2').modal('toggle');
    $('#myModal').modal('toggle');

    $('#aleultimo').on('click', function() {
        $('#modaledson').modal('toggle');
    })
    ultimo

    $('#ultimo').on('click', function() {
        $('#modalnico').modal('toggle');
    })

});