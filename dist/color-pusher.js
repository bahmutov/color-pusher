/**
 * color-pusher - v0.1.5 - 2016-09-18
 * Copyright (c) 2016 Gleb Bahmutov gleb.bahmutov@gmail.com
 */

/**
 * @license jQuery paging plugin v1.8 06/21/2010
 * http://www.xarg.org/project/jquery-color-plugin-xcolor/
 *
 * Copyright (c) 2010, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
// ([^a-z."/])m([^a-z:"])
(function ($, undefined) {

	// http://www.w3.org/TR/css3-color/#svg-color
	var color_names = {
		"aliceblue": "f0f8ff",
		"antiquewhite": "faebd7",
		"aqua": "0ff",
		"aquamarine": "7fffd4",
		"azure": "f0ffff",
		"beige": "f5f5dc",
		"bisque": "ffe4c4",
		"black": "000",
		"blanchedalmond": "ffebcd",
		"blue": "00f",
		"blueviolet": "8a2be2",
		"brown": "a52a2a",
		"burlywood": "deb887",
		"burntsienna": "ea7e5d",
		"cadetblue": "5f9ea0",
		"chartreuse": "7fff00",
		"chocolate": "d2691e",
		"coral": "ff7f50",
		"cornflowerblue": "6495ed",
		"cornsilk": "fff8dc",
		"crimson": "dc143c",
		"cyan": "0ff",
		"darkblue": "00008b",
		"darkcyan": "008b8b",
		"darkgoldenrod": "b8860b",
		"darkgray": "a9a9a9",
		"darkgreen": "006400",
		"darkgrey": "a9a9a9",
		"darkkhaki": "bdb76b",
		"darkmagenta": "8b008b",
		"darkolivegreen": "556b2f",
		"darkorange": "ff8c00",
		"darkorchid": "9932cc",
		"darkred": "8b0000",
		"darksalmon": "e9967a",
		"darkseagreen": "8fbc8f",
		"darkslateblue": "483d8b",
		"darkslategray": "2f4f4f",
		"darkslategrey": "2f4f4f",
		"darkturquoise": "00ced1",
		"darkviolet": "9400d3",
		"deeppink": "ff1493",
		"deepskyblue": "00bfff",
		"dimgray": "696969",
		"dimgrey": "696969",
		"dodgerblue": "1e90ff",
		"firebrick": "b22222",
		"floralwhite": "fffaf0",
		"forestgreen": "228b22",
		"fuchsia": "f0f",
		"gainsboro": "dcdcdc",
		"ghostwhite": "f8f8ff",
		"gold": "ffd700",
		"goldenrod": "daa520",
		"gray": "808080",
		"green": "008000",
		"greenyellow": "adff2f",
		"grey": "808080",
		"honeydew": "f0fff0",
		"hotpink": "ff69b4",
		"indianred": "cd5c5c",
		"indigo": "4b0082",
		"ivory": "fffff0",
		"khaki": "f0e68c",
		"lavender": "e6e6fa",
		"lavenderblush": "fff0f5",
		"lawngreen": "7cfc00",
		"lemonchiffon": "fffacd",
		"lightblue": "add8e6",
		"lightcoral": "f08080",
		"lightcyan": "e0ffff",
		"lightgoldenrodyellow": "fafad2",
		"lightgray": "d3d3d3",
		"lightgreen": "90ee90",
		"lightgrey": "d3d3d3",
		"lightpink": "ffb6c1",
		"lightsalmon": "ffa07a",
		"lightseagreen": "20b2aa",
		"lightskyblue": "87cefa",
		"lightslategray": "789",
		"lightslategrey": "789",
		"lightsteelblue": "b0c4de",
		"lightyellow": "ffffe0",
		"lime": "0f0",
		"limegreen": "32cd32",
		"linen": "faf0e6",
		"magenta": "f0f",
		"maroon": "800000",
		"mediumaquamarine": "66cdaa",
		"mediumblue": "0000cd",
		"mediumorchid": "ba55d3",
		"mediumpurple": "9370db",
		"mediumseagreen": "3cb371",
		"mediumslateblue": "7b68ee",
		"mediumspringgreen": "00fa9a",
		"mediumturquoise": "48d1cc",
		"mediumvioletred": "c71585",
		"midnightblue": "191970",
		"mintcream": "f5fffa",
		"mistyrose": "ffe4e1",
		"moccasin": "ffe4b5",
		"navajowhite": "ffdead",
		"navy": "000080",
		"oldlace": "fdf5e6",
		"olive": "808000",
		"olivedrab": "6b8e23",
		"orange": "ffa500",
		"orangered": "ff4500",
		"orchid": "da70d6",
		"palegoldenrod": "eee8aa",
		"palegreen": "98fb98",
		"paleturquoise": "afeeee",
		"palevioletred": "db7093",
		"papayawhip": "ffefd5",
		"peachpuff": "ffdab9",
		"peru": "cd853f",
		"pink": "ffc0cb",
		"plum": "dda0dd",
		"powderblue": "b0e0e6",
		"purple": "800080",
		"red": "f00",
		"rosybrown": "bc8f8f",
		"royalblue": "4169e1",
		"saddlebrown": "8b4513",
		"salmon": "fa8072",
		"sandybrown": "f4a460",
		"seagreen": "2e8b57",
		"seashell": "fff5ee",
		"sienna": "a0522d",
		"silver": "c0c0c0",
		"skyblue": "87ceeb",
		"slateblue": "6a5acd",
		"slategray": "708090",
		"slategrey": "708090",
		"snow": "fffafa",
		"springgreen": "00ff7f",
		"steelblue": "4682b4",
		"tan": "d2b48c",
		"teal": "008080",
		"thistle": "d8bfd8",
		"tomato": "ff6347",
		"turquoise": "40e0d0",
		"violet": "ee82ee",
		"wheat": "f5deb3",
		"white": "fff",
		"whitesmoke": "f5f5f5",
		"yellow": "ff0",
		"yellowgreen": "9acd32"
	}, _RGBAtoCSS;

	/**
	 * @constructor
	 */
	function xColor(color) {

		/**
		 * normalize function
		 * @param {(number|string)=} n (optional)
		 * @param {(number|string)=} s (optional)
		 */
		function _normalize(n, s) {

			var m;

			if (undefined !== n) {
				n = parseFloat(n);
			}

			if (undefined === s) {
				s = 255;
				m = 255;
			} else if (1 === s) {

				if (undefined === n || 1 === n) {
					return 1;
				}
				s = 100;
				m = 1;
			} else {
				m = s;
			}

			if (isNaN(n) || n <= 0) {
				return 0;
			}

			if (s < n) {
				return m;
			}

			if (n < 1 || 1 === s) {
				if (1 === m) {
					return n;
				} else {
					return (n * m) | 0;
				}
			}
			return n * m / s;
		}

		function _hsl(h,s,l) {

			h = _normalize(h, 360) / 360;
			s = _normalize(s, 1);
			l = _normalize(l, 1);

			if (0 === s) {
				l = Math.round(255 * l);
				return [l, l, l];
			}

			function _hue(v1, v2, h) {
				h = ++h % 1;

				if (6 * h < 1) return v1 + (v2 - v1) * 6 * h;
				if (2 * h < 1) return v2;
				if (3 * h < 2) return v1 + (v2 - v1) * (4 - 6 * h);
				return v1;
			}

			var v = l < .5 ? (l + l * s) : (l + s - l * s);
			var m = l + l - v;

			return [
			Math.round(255 *_hue(m, v, h + 1 / 3)),
			Math.round(255 *_hue(m, v, h)),
			Math.round(255 *_hue(m, v, h - 1 / 3)) ];
		}

		function _hsv(h,s,v) {

			h = _normalize(h, 360) / 60;
			s = _normalize(s, 1);
			v = _normalize(v, 1);

			var hi = h|0;
			var f = h - hi;

			var p = Math.round(255 * v * (1 - s));
			var q = Math.round(255 * v * (1 - s * f));
			var t = Math.round(255 * v * (1 - s * (1 - f)));
				v = Math.round(255 * v);

			switch(hi) {
			case 1:
				return [q, v, p];
			case 2:
				return [p, v, t];
			case 3:
				return [p, q, v];
			case 4:
				return [t, p, v];
			case 5:
				return [v, p, q];
			}
			return [v, t, p];
		}

		this["setColor"] = function (color) {

			this.success = true;

			if ("number" === typeof color) {

				this["a"] =((color >> 24) & 0xff) / 255;
				this["r"] = (color >> 16) & 0xff;
				this["g"] = (color >>  8) & 0xff;
				this["b"] = (color      ) & 0xff;
				return;
			}

			while ("object" === typeof color) {

				if (0 in color && 1 in color && 2 in color) {
					this["a"] = _normalize(color[3], 1);
					this["r"] = _normalize(color[0]);
					this["g"] = _normalize(color[1]);
					this["b"] = _normalize(color[2]);
					return;
				} else if ('r' in color && 'g' in color && 'b' in color) {
					this["a"] = _normalize(color["a"], 1);
					this["r"] = _normalize(color["r"]);
					this["g"] = _normalize(color["g"]);
					this["b"] = _normalize(color["b"]);
					return;
				} else if ('h' in color && 's' in color) {

					var rgb;

					if ('l' in color) {
						rgb = _hsl(color["h"], color["s"], color["l"]);
					} else if ('v' in color) {
						rgb = _hsv(color["h"], color["s"], color["v"]);
					} else if ('b' in color) {
						rgb = _hsv(color["h"], color["s"], color["b"]);
					} else {
						break;
					}

					this["a"] = _normalize(color["a"], 1);
					this["r"] = rgb[0];
					this["g"] = rgb[1];
					this["b"] = rgb[2];
					return;
				}
				break;
			}

			if ("string" === typeof color) {

				color = color.toLowerCase().replace(/[^a-z0-9,.()#%]/g, '');

				var part, c;

				if ('transparent' === color) {
					this["a"] = /* void */
					this["r"] = /* void */
					this["g"] = /* void */
					this["b"] = 0;
					return;
				}

				if ('rand' === color) {

					c = Math.random() * 0xffffff|0;

					this["a"] = 1;
					this["r"] = ((c >> 16) & 0xff);
					this["g"] = ((c >>  8) & 0xff);
					this["b"] = ((c      ) & 0xff);
					return;
				}

				if (undefined !== color_names[color]) {
					color = '#' + color_names[color];
				}

				// #ff9000, #ff0000
				if ((part = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/.exec(color))) {
					this["a"] = 1;
					this["r"] = parseInt(part[1], 16);
					this["g"] = parseInt(part[2], 16);
					this["b"] = parseInt(part[3], 16);
					return;
				}

				// #f00, fff
				if ((part = /^#?([0-9a-f])([0-9a-f])([0-9a-f])$/.exec(color))) {
					this["a"] = 1;
					this["r"] = parseInt(part[1] + part[1], 16);
					this["g"] = parseInt(part[2] + part[2], 16);
					this["b"] = parseInt(part[3] + part[3], 16);
					return;
				}

				// rgb(1, 234, 56)
				if ((part = /^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?\)$/.exec(color))) {
					this["a"] = _normalize(part[5], 1);
					this["r"] = _normalize(part[1]);
					this["g"] = _normalize(part[2]);
					this["b"] = _normalize(part[3]);
					return;
				}

				// rgb(66%, 55%, 44%) in [0,100]%, [0,100]%, [0,100]%
				if ((part = /^rgba?\(([0-9.]+\%),([0-9.]+\%),([0-9.]+\%)(,([0-9.]+)\%?)?\)$/.exec(color))) {
					this["a"] = _normalize(part[5], 1);
					this["r"] = Math.round(2.55 * _normalize(part[1], 100));
					this["g"] = Math.round(2.55 * _normalize(part[2], 100));
					this["b"] = Math.round(2.55 * _normalize(part[3], 100));
					return;
				}

				// hsv(64, 40, 16) in [0, 360], [0,100], [0,100]
				if ((part = /^hs([bvl])a?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?\)$/.exec(color))) {
					var func;
					if ("l" === part[1]) {
						func = _hsl;
					} else {
						func = _hsv;
					}

					c = func(parseInt(part[2], 10), parseInt(part[3], 10), parseInt(part[4], 10));

					this["a"] = _normalize(part[6], 1);
					this["r"] = c[0];
					this["g"] = c[1];
					this["b"] = c[2];
					return;
				}

				// 1, 234, 56
				if ((part = /^(\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?$/.exec(color))) {
					this["a"] = _normalize(part[5], 1);
					this["r"] = _normalize(part[1]);
					this["g"] = _normalize(part[2]);
					this["b"] = _normalize(part[3]);
					return;
				}
			}
			this.success = false;
		};

		this["getColor"] = function (type) {

			if (undefined !== type) switch (type.toLowerCase()) {
				case "rgb":
					return this["getRGB"]();
				case "hsv":
				case "hsb":
					return this["getHSV"]();
				case "hsl":
					return this["getHSL"]();
				case "int":
					return this["getInt"]();
				case "array":
					return this["getArray"]();
				case "fraction":
					return this["getFraction"]();
				case "css":
				case "style":
					return this["getCSS"]();
				case "name":
					return this["getName"]();
			}
			return this["getHex"]();
		};

		this["getRGB"] = function () {

			if (this.success) {

				return {
					"r": this["r"],
					"g": this["g"],
					"b": this["b"],
					"a": this["a"]
				};
			}
			return null;
		};

		this["getCSS"] = function () {

			if (this.success) {

				if (0 === this["a"]) {
					return "transparent";
				}

				if (1 === this["a"]) {
					return 'rgb(' + this["r"] + ',' + this["g"] + ',' + this["b"] + ')';
				}
				return _RGBAtoCSS(this["r"], this["g"], this["b"], this["a"]);
			}
			return null;
		};

		this["getArray"] = function () {

			if (this.success) {
				return [this["r"], this["g"], this["b"], 100 * this["a"]|0];
			}
			return null;
		};

		this["getName"] = function () {

			if (this.success) {

				var lowest = null;
				var lowest_ndx;

				var table = color_names;

				var a = this["getHSL"]();

				for (var i in table) {

					/* We do not handle transparency */
					var b = new xColor(table[i])["getHSL"]();

					var tmp = Math.sqrt(.5 * (a["h"] - b["h"]) * (a["h"] - b["h"]) + .5 * (a["s"] - b["s"]) * (a["s"] - b["s"]) + (a["l"] - b["l"]) * (a["l"] - b["l"]));

					if (null === lowest || tmp < lowest) {
						lowest = tmp;
						lowest_ndx = i;
					}
				}
				return lowest_ndx;
			}
			return null;
		};

		this["getFraction"] = function () {

			if (this.success) {

				return {
					"r": this["r"] / 255,
					"g": this["g"] / 255,
					"b": this["b"] / 255,
					"a": this["a"]
				};
			}
			return null;
		};

		this["getHSL"] = function () {

			// inspiration: http://130.113.54.154/~monger/hsl-rgb.html
			if (this.success) {

				var r = this["r"] / 255;
				var g = this["g"] / 255;
				var b = this["b"] / 255;

				var min = Math.min(r, g, b);
				var max = Math.max(r, g, b);
				var delta = max - min;

				var h, s, l = (max + min) / 2;

				if (0 === delta) {
					h = 0;
					s = 0;
				} else {

					if (r === max) {
						h = (g - b) / delta;
					} else if (g === max) {
						h = 2 + (b - r) / delta;
					} else {
						h = 4 + (r - g) / delta;
					}

					s = delta / (l < .5 ? max + min : 2 - max - min);
				}
				return {
					"h": Math.round( 60 * ((6 + h) % 6)),
					"s": Math.round(100 * s),
					"l": Math.round(100 * l),
					"a": this["a"]
				};
			}
			return null;
		};

		this["getHSV"] = function () {

			if (this.success) {

				var r = this["r"] / 255;
				var g = this["g"] / 255;
				var b = this["b"] / 255;

				/*
				if (r > g) {
					max = r;
					min = g;
				} else {
					min = r;
					max = g;
				}

				if (b > max)
					max = b;

				if (b < min)
					min = b;
				*/

				var min = Math.min(r, g, b);
				var max = Math.max(r, g, b);
				var delta = max - min;

				var h, s, v = max;

				if (0 === max) {
					s = 0;
				} else {
					s = delta / max;
				}

				if (0 === delta) {
					h = 0;
				} else if (r === max) {
					h = (g - b) / delta;
				} else if (g === max) {
					h = 2 + (b - r) / delta;
				} else {
					h = 4 + (r - g) / delta;
				}

				return {
					"h": Math.round( 60 * ((6 + h) % 6)),
					"s": Math.round(100 * s),
					"v": Math.round(100 * v),
					"a": this["a"]
				};
			}
			return null;
		};

		this["getHex"] = function () {

			if (this.success) {

				var chars = "0123456789abcdef";

				var r1 = this["r"] >> 4;
				var g1 = this["g"] >> 4;
				var b1 = this["b"] >> 4;

				var r2 = this["r"] & 0xf;
				var g2 = this["g"] & 0xf;
				var b2 = this["b"] & 0xf;

				return '#'
					+ chars.charAt(r1) + chars.charAt(r2)
					+ chars.charAt(g1) + chars.charAt(g2)
					+ chars.charAt(b1) + chars.charAt(b2);
			}
			return null;
		};

		this["getInt"] = function (alpha) {

			if (this.success) {
				if (undefined !== alpha) {
					return ((100 * this["a"]|0) << 24 ^ this["r"] << 16 ^ this["g"] << 8 ^ this["b"]);
				}
				return (this["r"] << 16 ^ this["g"] << 8 ^ this["b"]) & 0xffffff;
			}
			return null;
		};

		this["toString"] = function () {
			return this["getHex"]();
		};

		this["setColor"](color);
	}

	$["each"](['color', 'backgroundColor', 'borderColor', 'borderTopColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'outlineColor'], function(i, attr) {

		$["cssHooks"][attr] = {

			"set": function(elem, value) {
				elem["style"][attr] = (new xColor(value))["getCSS"]();
			}
		};

		$["fx"]["step"][attr] = function(fx) {

			if (undefined === fx["xinit"]) {

				if ("string" === typeof fx["end"] && -1 !== fx["end"].indexOf(";")) {

					var x, arr = fx["end"].split(";");

					if (arr.length > 2) {

						for (x in arr) {
							if (-1 === arr[x].indexOf('native')) {
								arr[x] = new xColor(arr[x]);
							} else {
								arr[x] = findColor(fx["elem"], attr);
							}
						}
						fx["start"] = null;
						fx["end"]   = arr;
					} else {
						fx["start"] = new xColor(arr[0]);
						fx["end"]   = new xColor(arr[1]);
					}
				} else {
					fx["start"] = findColor(fx["elem"], attr);
					fx["end"] = new xColor(fx["end"]);
				}

				fx["xinit"] = 1;
			}

			var S = fx["start"];
			var E = fx["end"];
			var P = fx["pos"];

			if (null === S) {
				var m = P * (E.length - 1),
				    n = P < 1 ? m | 0 : E.length - 2;
				S = E[n];
				E = E[n + 1];
				P = m - n;
			}

			fx["elem"]["style"][attr] =_RGBAtoCSS(
				S["r"] + P * (E["r"] - S["r"])|0,
				S["g"] + P * (E["g"] - S["g"])|0,
				S["b"] + P * (E["b"] - S["b"])|0,
				S["a"] + P * (E["a"] - S["a"])
			);
		}
	});

	$(function() {
		var div = document.createElement("div"),
			div_style = div["style"];

		_RGBAtoCSS = function(r, g, b, a) {
			return "rgba(" + r + "," + g + "," + b + "," + a + ")";
		};

		div_style["cssText"] = "background-color:rgba(1,1,1,.5)";

		if (!($["support"]["rgba"] = div_style["backgroundColor"].indexOf("rgba") > -1)) {
			_RGBAtoCSS = function(r, g, b) {
				return "rgb(" + r + "," + g + "," + b + ")";
			};
		}
	});

	function findColor(elem, attr) {

		var color = "";

		do {
			color = $["css"](elem, attr);

			if ("" !== color && "transparent" !== color && "rgba(0, 0, 0, 0)" !== color || $["nodeName"](elem, "body")) break;

		} while ((elem = elem["parentNode"]));

		if ("" === color) {

			if ($["support"]["rgba"]) {
				color = "transparent";
			} else if ("backgroundColor" === attr) {
				color = "white";
			} else {
				color = "black";
			}
		}
		return new xColor(color);
	}

	/**
     * @constructor
     */
	function xColorMix() {

		this["test"] = function (col) {

			var c = new xColor(col);

			if (c.success) {
				return c;
			}
			return null;
		};

		this["red"] = function (col) {

			var c = new xColor(col);

			if (c.success) {
				c["g"] = 0xff;
				c["b"] = 0xff;
				return c;
			}
			return null;
		};

		this["blue"] = function (col) {

			var c = new xColor(col);

			if (c.success) {
				c["r"] = 0xff;
				c["g"] = 0xff;
				return c;
			}
			return null;
		};

		this["green"] = function (col) {

			var c = new xColor(col);

			if (c.success) {
				c["r"] = 0xff;
				c["b"] = 0xff;
				return c;
			}
			return null;
		};

		this["sepia"] = function(col) {

			var c = new xColor(col);

			// Microsoft's sepia function http://msdn.microsoft.com/en-us/magazine/cc163866.aspx
			if (c.success) {

				var r = c["r"], g = c["g"], b = c["b"];

				c["r"] = Math.round(r * .393 + g * .769 + b * .189);
				c["g"] = Math.round(r * .349 + g * .686 + b * .168);
				c["b"] = Math.round(r * .272 + g * .534 + b * .131);

				return c;
			}
			return null;
		};

		this["random"] = function () {

			return new xColor([
				(255 * Math.random())|0,
				(255 * Math.random())|0,
				(255 * Math.random())|0
				]);
		};

		this["inverse"] = function (col) {

			var c = new xColor(col);

			if (c.success) {
				c["r"]^= 0xff;
				c["g"]^= 0xff;
				c["b"]^= 0xff;
				return c;
			}
			return null;
		};

		this["opacity"] = function (x, y, o) {

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success & b.success) {

				if (o > 1) {
					o/= 100;
				}

				o = Math.max(o - 1 + b["a"], 0);

				a["r"] = Math.round((b["r"] - a["r"]) * o + a["r"]);
				a["g"] = Math.round((b["g"] - a["g"]) * o + a["g"]);
				a["b"] = Math.round((b["b"] - a["b"]) * o + a["b"]);

				return a;
			}
			return null;
		};

		this["greyfilter"] = function (col, formula) {

			var v, c = new xColor(col);

			if (c.success) {
				switch (formula) {
					case 1:
						// My own formula
						v = .35 + 13 * (c["r"] + c["g"] + c["b"]) / 60;
						break;
					case 2:
						// Sun's formula: (1 - avg) / (100 / 35) + avg)
						v = (13 * (c["r"] + c["g"] + c["b"]) + 5355) / 60;
						break;
					default:
						v = c["r"] * .3 + c["g"] * .59 + c["b"] * .11;
				}
				c["r"] = c["g"] = c["b"] = Math.min(v|0, 255);

				return c;
			}
			return null;
		};

		this["webround"] = function (col) {

			var c = new xColor(col);

			if (c.success) {
				if ((c["r"]+= 0x33 - c["r"] % 0x33) > 0xff) c["r"] = 0xff;
				if ((c["g"]+= 0x33 - c["g"] % 0x33) > 0xff) c["g"] = 0xff;
				if ((c["b"]+= 0x33 - c["b"] % 0x33) > 0xff) c["b"] = 0xff;
				return c;
			}
			return null;
		};

		this["distance"] = function (x, y) {

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success & b.success) {
				// Approximation attempt of http://www.compuphase.com/cmetric.htm
				return Math.sqrt(3 * (b["r"] - a["r"]) * (b["r"] - a["r"]) + 4 * (b["g"] - a["g"]) * (b["g"] - a["g"]) + 2 * (b["b"] - a["b"]) * (b["b"] - a["b"]));
			}
			return null;
		};

		this["readable"] = function (bg, col, size) {

			// good ressource: http://www.hgrebdes.com/colour/spectrum/colourvisibility.html

			var a = new xColor(col);
			var b = new xColor(bg);

			size = size || 10;

			if (a.success & b.success) {

				// but here's my version based on the idea:

				var diff = b["r"] * 0.299 + b["g"] * 0.587 + b["b"] * 0.114 -
						   a["r"] * 0.299 - a["g"] * 0.587 - a["b"] * 0.114;

				return !((diff < (1.5 + 141.162 * Math.pow(0.975, size)))
					  && (diff > (-.5 - 154.709 * Math.pow(0.990, size))));
			}
			return null;
		};

		this["combine"] = function (x, y) {

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success & b.success) {
				a["r"]^= b["r"];
				a["g"]^= b["g"];
				a["b"]^= b["b"];
				return a;
			}
			return null;
		};

		this["breed"] = function (x, y) {

			var a = new xColor(x);
			var b = new xColor(y);

			var mask = 0, i = 6;

			if (a.success & b.success) {

				while (i--) {
					if (Math.random() < .5) {
						mask|= 0x0f << (i << 2);
					}
				}

				a["r"] = (a["r"] & ((mask >> 0x10) & 0xff)) | (b["r"] & (((mask >> 0x10) & 0xff) ^ 0xff));
				a["g"] = (a["g"] & ((mask >> 0x08) & 0xff)) | (b["g"] & (((mask >> 0x08) & 0xff) ^ 0xff));
				a["b"] = (a["b"] & ((mask >> 0x00) & 0xff)) | (b["b"] & (((mask >> 0x00) & 0xff) ^ 0xff));
				return a;
			}
			return null;
		};

		this["additive"] = function (x, y) {

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success & b.success) {

				if ((a["r"]+= b["r"]) > 0xff) a["r"] = 0xff;
				if ((a["g"]+= b["g"]) > 0xff) a["g"] = 0xff;
				if ((a["b"]+= b["b"]) > 0xff) a["b"] = 0xff;

				return a;
			}
			return null;
		};

		this["subtractive"] = function (x, y) {

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success & b.success) {

				if ((a["r"]+= b["r"] - 0xff) < 0) a["r"] = 0;
				if ((a["g"]+= b["g"] - 0xff) < 0) a["g"] = 0;
				if ((a["b"]+= b["b"] - 0xff) < 0) a["b"] = 0;

				return a;
			}
			return null;
		};

		this["subtract"] = function (x, y) {

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success & b.success) {

				if ((a["r"]-= b["r"]) < 0) a["r"] = 0;
				if ((a["g"]-= b["g"]) < 0) a["g"] = 0;
				if ((a["b"]-= b["b"]) < 0) a["b"] = 0;

				return a;
			}
			return null;
		};

		this["multiply"] = function (x, y) {

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success & b.success) {
				a["r"] = (a["r"] / 255 * b["r"])|0;
				a["g"] = (a["g"] / 255 * b["g"])|0;
				a["b"] = (a["b"] / 255 * b["b"])|0;
				return a;
			}
			return null;
		};

		this["average"] = function (x, y) {

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success & b.success) {
				a["r"] = (a["r"] + b["r"]) >> 1;
				a["g"] = (a["g"] + b["g"]) >> 1;
				a["b"] = (a["b"] + b["b"]) >> 1;
				return a;
			}
			return null;
		};

		this["triad"] = function (col) {

			var c = new xColor(col);

			if (c.success) {

				return [c,
				new xColor([c["b"], c["r"], c["g"]]),
				new xColor([c["g"], c["b"], c["r"]])];
			}
			return null;
		};

		this["tetrad"] = function (col) {

			var c = new xColor(col);

			if (c.success) {

				return [c,
				new xColor([c["b"], c["r"], c["b"]]),
				new xColor([c["b"], c["g"], c["r"]]),
				new xColor([c["r"], c["b"], c["r"]])];
			}
			return null;
		};

		this["gradientlevel"] = function (x, y, level, deg) {

			if (undefined === deg) deg = 1;

			if (level > deg) return null;

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success & b.success) {

				a["r"] = (a["r"] + ((b["r"] - a["r"]) / deg) * level)|0;
				a["g"] = (a["g"] + ((b["g"] - a["g"]) / deg) * level)|0;
				a["b"] = (a["b"] + ((b["b"] - a["b"]) / deg) * level)|0;

				return a;
			}
			return null;
		};

		this["gradientarray"] = function(arr, level, deg) {

			if (level > deg || !arr.length) return null;

			if (arr.length == 1) {
				return new xColor(arr[0]);
			}

			var e = level * (arr.length - 1) / (deg + 1) | 0;
			var step = deg / (arr.length - 1);

			return $["xcolor"]["gradientlevel"](arr[e], arr[e + 1], level - e * step, step);
		};

		this["nearestname"] = function (a) {

			a = new xColor(a);

			if (a.success) {
				return a["getName"]();
			}
			return null;
		};

		this["darken"] = function (col, by, shade) {

			if (undefined === by) {
				by = 1;
			} else if (by < 0) return this["lighten"](col, -by, shade);

			if (undefined === shade) {
				shade = 32;
			}

			var c = new xColor(col);

			if (c.success) {
				if ((c["r"]-= shade * by) < 0) c["r"] = 0;
				if ((c["g"]-= shade * by) < 0) c["g"] = 0;
				if ((c["b"]-= shade * by) < 0) c["b"] = 0;
				return c;
			}
			return null;
		};

		this["lighten"] = function (col, by, shade) {

			if (undefined === by) {
				by = 1;
			} else if (by < 0) return this["darken"](col, -by, shade);

			if (undefined === shade) {
				shade = 32;
			}

			var c = new xColor(col);

			if (c.success) {
				if ((c["r"]+= shade * by) > 0xff) c["r"] = 0xff;
				if ((c["g"]+= shade * by) > 0xff) c["g"] = 0xff;
				if ((c["b"]+= shade * by) > 0xff) c["b"] = 0xff;
				return c;
			}
			return null;
		};

		this["analogous"] = function (col, results, slices) {

			if (undefined === results) {
				results = 8;
			}

			if (undefined === slices) {
				slices = 30;
			}

			var c = new xColor(col);

			if (c.success) {

				var hsv = c["getHSV"]();
				var part = 360 / slices, ret = [ c ];

				for (hsv["h"] = ((hsv["h"] - (part * results >> 1)) + 720) % 360; --results; ) {
					hsv["h"]+= part;
					hsv["h"]%= 360;
					ret.push(new xColor(hsv));
				}
				return ret;
			}
			return null;
		};

		this["complementary"] = function(col) {

			var c = new xColor(col);

			if(c.success) {

				var hsl = c["getHSL"]();

				hsl["h"] = (hsl["h"] + 180) % 360;

				return new xColor(hsl);
			}
			return null;
		};

		this["splitcomplement"] = function (col) {

			var c = new xColor(col);

			if (c.success) {

				var hsv = c["getHSV"]();
				var ret = [ c ];

				hsv["h"]+= 72;
				hsv["h"]%= 360;
				ret.push(new xColor(hsv));

				hsv["h"]+= 144;
				hsv["h"]%= 360;
				ret.push(new xColor(hsv));

				return ret;
			}
			return null;
		};

		this["monochromatic"] = function (col, results) {

			if (undefined === results) {
				results = 6;
			}

			var c = new xColor(col);

			if (c.success) {

				var hsv = c["getHSV"]();
				var ret = [ c ];

				while (--results) {
					hsv["v"]+= 20;
					hsv["v"]%= 100;
					ret.push(new xColor(hsv));
				}
				return ret;
			}
			return null;
		};
	}

	$["xcolor"] = new xColorMix();

	$["fn"]["readable"] = function () {

		var elem = this[0];
		var f = "";
		var b = "";

		do {

			if ("" === f && ("transparent" === (f = $["css"](elem, "color")) || "rgba(0, 0, 0, 0)" === f)) {
				f = "";
			}

			if ("" === b && ("transparent" === (b = $["css"](elem, "backgroundColor")) || "rgba(0, 0, 0, 0)" === b)) {
				b = "";
			}

			if ("" !== f && "" !== b || $["nodeName"](elem, "body")) {
				break;
			}

		} while ((elem = elem["parentNode"]));

		if ("" === f) {
			f = "black";
		}

		if ("" === b) {
			b = "white";
		}

		// todo: if alpha != 1, use opacity() to calculate correct color on certain element and it's parent
		return $["xcolor"]["readable"](b, f);
	};

	$["fn"]["colorize"] = function (FROM, TO, TYPE) {

		var modifiers = {

			// Returns number in [0, 1] (0 = FROM, 1 = TO)

			"gradient": function (k, l, diff, c) {
				return k / l;
			},
			"flip": function (k, l, diff, c) {
				return (" " === c) ? diff : !diff;
			},
			"pillow": function (k, l, diff, c) {
				k*= 2;
				return (k <= l)
					?	(k / l)
					:	(2 - k / l);
			}
		};

		if ("function" === typeof TYPE) {
			/* void */
		} else if (void 0 === modifiers[TYPE]) {
			return;
		} else {
			TYPE = modifiers[TYPE];
		}

		FROM = new xColor(FROM);
		TO   = new xColor(TO);

		this["each"](function() {

			var tmp  = this.childNodes,
				LEN  = 0,
				K    = 0;

			if (FROM.success & TO.success) {

				for (var i = tmp.length; i--; LEN+= tmp[i]["textContent"].length){}

				(function replace(node) {

					var i = 0,
						len;

					if (3 === node.nodeType) {

							var x = FROM;
							var y = TO;
							var l = LEN;
							var elem, ctx, diff = 0, c, calc = TYPE;

							len = node.nodeValue.length;
							ctx = document.createElement('span');

							for (i = 0; i < len; ++i) {

								elem = document.createElement('span');
								c    = node.nodeValue.charAt(i);

								diff = calc(K, l, diff, c);

								elem["style"]["color"] =_RGBAtoCSS(
									x["r"] + diff * (y["r"] - x["r"])|0,
									x["g"] + diff * (y["g"] - x["g"])|0,
									x["b"] + diff * (y["b"] - x["b"])|0,
									x["a"] + diff * (y["a"] - x["a"])
								);

								elem.appendChild(document.createTextNode(
											c
										)
								);
								ctx.appendChild(elem);
								++K;
							}
							node.parentNode.replaceChild(ctx, node);

					} else {
						for (len = node.childNodes.length; i < len; ++i) {
							replace(node.childNodes[i]);
						}
					}
				})(this);

			}
		});
	};

}(jQuery));

!function(n){"use strict";function r(n,t){var e;U.object(n),U.object(t);for(e in t)if(t.hasOwnProperty(e)){if(n.hasOwnProperty(e)===!1||typeof n[e]!=typeof t[e])return!1;if(u(n[e])&&r(n[e],t[e])===!1)return!1}return!0}function t(n,r){return"undefined"==typeof n||null===n?!1:f(r)&&n instanceof r?!0:!1}function e(n){var r;if(u(n)){for(r in n)if(n.hasOwnProperty(r))return!1;return!0}return!1}function u(n){return"object"==typeof n&&null!==n&&o(n)===!1&&a(n)===!1}function i(n,r){return n&&n.length===r}function o(n){return Array.isArray?Array.isArray(n):"[object Array]"===Object.prototype.toString.call(n)}function a(n){return"[object Date]"===Object.prototype.toString.call(n)}function f(n){return"function"==typeof n}function c(n){return l(n)&&/^https?:\/\/.+/.test(n)}function l(n){return y(n)&&""!==n}function y(n){return"string"==typeof n}function p(n){return s(n)&&(1===n%2||-1===n%2)}function b(n){return s(n)&&0===n%2}function d(n){return s(n)&&n>0}function v(n){return s(n)&&0>n}function s(n){return"number"==typeof n&&isNaN(n)===!1}function m(n,r){var t,e,i={};U.object(n),U.object(r);for(t in r)r.hasOwnProperty(t)&&(e=r[t],f(e)?i[t]=n.hasOwnProperty(t)?e(n[t]):void 0:u(e)&&(i[t]=n.hasOwnProperty(t)?m(n[t],e):void 0));return i}function g(n){var r,t;U.object(n);for(r in n)if(n.hasOwnProperty(r)){if(t=n[r],u(t)&&g(t)===!1)return!1;if(t===!1)return!1}return!0}function h(n){var r,t;U.object(n);for(r in n)if(n.hasOwnProperty(r)){if(t=n[r],u(t)&&h(t))return!0;if(t===!0)return!0}return!1}function j(n,r){var t;for(t in r)r.hasOwnProperty(t)&&(n[t]=r[t]);return n}function I(n,r){return function(){var t;if(n.apply(null,arguments)===!1)throw t=arguments[arguments.length-1],new Error(l(t)?t:r)}}function w(n){return function(){return null===arguments[0]||void 0===arguments[0]?!0:n.apply(null,arguments)}}function O(n){return N(n,S)}function N(n,r){var t,e={};for(t in r)r.hasOwnProperty(t)&&(e[t]=n(r[t],A[t]));return e}function P(r){"function"==typeof define&&define.amd?define(function(){return r}):"undefined"!=typeof module&&null!==module?module.exports=r:n.check=r}var A,S,k,U,x;S={like:r,instance:t,emptyObject:e,object:u,length:i,array:o,date:a,fn:f,webUrl:c,unemptyString:l,string:y,evenNumber:b,oddNumber:p,positiveNumber:d,negativeNumber:v,number:s},A={like:"Invalid type",instance:"Invalid type",emptyObject:"Invalid object",object:"Invalid object",length:"Invalid length",array:"Invalid array",date:"Invalid date",fn:"Invalid function",webUrl:"Invalid URL",unemptyString:"Invalid string",string:"Invalid string",evenNumber:"Invalid number",oddNumber:"Invalid number",positiveNumber:"Invalid number",negativeNumber:"Invalid number",number:"Invalid number"},k={map:m,every:g,any:h},k=j(k,S),U=O(I),x=O(w),U.maybe=N(I,x),P(j(k,{verify:U,maybe:x}))}(this);
check.color = function (val) {
  if (!check.string(val)) { return false; }
  val = val.trim();
  if (val.length === 6) {
    val = '#' + val;
  }
  if (val.length !== 7) {
    return false;
  }
  return (/^#?[0-9a-f]{6}$/i).test(val);
};

check.verify.color = function (val, msg) {
  if (!check.color(val)) {
    throw new Error(msg);
  }
};

check.verify.colors = function (list) {
  check.verify.array(list, 'expected array of colors, got ' + list);
  list.forEach(function (color, index) {
    check.verify.color(color, 'invalid color ' + color + ' index ' + index);
  });
};

/* ---------------------------------------------------------------------------- 
    pusher.color.js
    A color parsing and manipulation library
   ----------------------------------------------------------------------------
    The MIT License (MIT). Copyright (c) 2013, Pusher Inc.
*/
(function(){function normalize360(v){v=v%360;return v<0?360+v:v}function unsigned(i){return i>>>0}function trimLc(s){return s.replace(/^\s+/,"").replace(/\s+$/,"").toLowerCase()}function slice(obj,index){return Array.prototype.slice.call(obj,index)}function append(arr,value){arr.push(value);return arr}function clamp(x,a,b){return!(x>a)?a:!(x<b)?b:x}function mix(x,y,a){return(1-a)*x+a*y}function f2b(f){f=Math.round(255*f);if(!(f>0))return 0;else if(!(f<255))return 255;else return f&255}function b2f(b){return b/255}function rgbToHsl(r,g,b){var max=Math.max(r,g,b),min=Math.min(r,g,b);var h,s,l=(max+min)/2;if(max==min){h=s=0}else{var d=max-min;s=l>.5?d/(2-max-min):d/(max+min);switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break}h/=6}return[h,s,l]}function hslToRgb(h,s,l){var r,g,b;if(s==0){r=g=b=l}else{function hue2rgb(p,q,t){if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p}var q=l<.5?l*(1+s):l+s-l*s;var p=2*l-q;r=hue2rgb(p,q,h+1/3);g=hue2rgb(p,q,h);b=hue2rgb(p,q,h-1/3)}return[r,g,b]}function hex4ToRgba(color){var rgba=[parseInt(color.substr(1,1),16),parseInt(color.substr(2,1),16),parseInt(color.substr(3,1),16),1];for(var i=0;i<3;++i)rgba[i]=(rgba[i]*16+rgba[i])/255;return rgba}function hex7ToRgba(color){return[parseInt(color.substr(1,2),16)/255,parseInt(color.substr(3,2),16)/255,parseInt(color.substr(5,2),16)/255,1]}var namedColors={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,216],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[216,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};function rgbaToHsva(rgba){var r=rgba[0];var g=rgba[1];var b=rgba[2];var min=Math.min(Math.min(r,g),b),max=Math.max(Math.max(r,g),b),delta=max-min;var value=max;var saturation,hue;if(max==min){hue=0}else if(max==r){hue=60*((g-b)/(max-min))%360}else if(max==g){hue=60*((b-r)/(max-min))+120}else if(max==b){hue=60*((r-g)/(max-min))+240}if(hue<0){hue+=360}if(max==0){saturation=0}else{saturation=1-min/max}return[Math.round(hue),Math.round(saturation*100),Math.round(value*100),rgba[3]]}function hsvaToRgba(hsva){var h=normalize360(hsva[0]);var s=hsva[1];var v=hsva[2];var s=s/100;var v=v/100;var hi=Math.floor(h/60%6);var f=h/60-hi;var p=v*(1-s);var q=v*(1-f*s);var t=v*(1-(1-f)*s);var rgb=[];switch(hi){case 0:rgb=[v,t,p];break;case 1:rgb=[q,v,p];break;case 2:rgb=[p,v,t];break;case 3:rgb=[p,q,v];break;case 4:rgb=[t,p,v];break;case 5:rgb=[v,p,q];break}return[rgb[0],rgb[1],rgb[2],hsva[3]]}function rgbaToHsl(c){var hsl=rgbToHsl(c[0],c[1],c[2]);hsl[0]=normalize360(Math.floor(hsl[0]*360));hsl[1]=Math.floor(hsl[1]*100);hsl[2]=Math.floor(hsl[2]*100);return hsl}function rgbaToHsla(c){var hsl=rgbaToHsl(c);hsl.push(c[3]);return hsl}function hslToRgba(c){var h=parseFloat(c[0])/360;var s=parseFloat(c[1])/100;var l=parseFloat(c[2])/100;var rgb=hslToRgb(h,s,l);return[rgb[0],rgb[1],rgb[2],1]}function hslaToRgba(c){var h=parseFloat(c[0])/360;var s=parseFloat(c[1])/100;var l=parseFloat(c[2])/100;var rgb=hslToRgb(h,s,l);return[rgb[0],rgb[1],rgb[2],parseFloat(c[3])]}var parse={byteOrPercent:function(s){var m;if(typeof s=="string"&&(m=s.match(/^([0-9]+)%$/)))return Math.floor(parseFloat(m[1])*255/100);else return parseFloat(s)},floatOrPercent:function(s){var m;if(typeof s=="string"&&(m=s.match(/^([0-9]+)%$/)))return parseFloat(m[1])/100;else return parseFloat(s)},numberOrPercent:function(s,scale){var m;if(typeof s=="string"&&(m=s.match(/^([0-9]+)%$/)))return parseFloat(m[1])/100*scale;else return parseFloat(s)},rgba:function(v){for(var i=0;i<3;++i)v[i]=b2f(parse.byteOrPercent(v[i]));v[3]=parse.floatOrPercent(v[i]);return new Color(v)},rgba8:function(v){return new Color([b2f(parse.byteOrPercent(v[0])),b2f(parse.byteOrPercent(v[1])),b2f(parse.byteOrPercent(v[2])),b2f(parse.byteOrPercent(v[3]))])},float3:function(v){for(var i=0;i<3;++i)v[i]=parse.floatOrPercent(v[i]);v[3]=1;return new Color(v)},float4:function(v){for(var i=0;i<3;++i)v[i]=parse.floatOrPercent(v[i]);v[3]=parse.floatOrPercent(v[i]);return new Color(v)},hsla:function(v){v[0]=parse.numberOrPercent(v[0],360);v[1]=parse.numberOrPercent(v[1],100);v[2]=parse.numberOrPercent(v[2],100);v[3]=parse.numberOrPercent(v[3],1);return new Color(hslaToRgba(v))},hsva:function(v){v[0]=normalize360(parseFloat(v[0]));v[1]=Math.max(0,Math.min(100,parseFloat(v[1])));v[2]=Math.max(0,Math.min(100,parseFloat(v[2])));v[3]=parse.floatOrPercent(v[3]);return new Color(hsvaToRgba(v))}};var supportedFormats={keyword:{},hex3:{},hex7:{},rgb:{parse:function(v){v=v.slice(0);v.push(1);return parse.rgba(v)}},rgba:{parse:parse.rgba},hsl:{parse:function(v){v=v.slice(0);v.push(1);return parse.hsla(v)}},hsla:{parse:parse.hsla},hsv:{parse:function(v){v=v.slice(0);v.push(1);return parse.hsva(v)}},hsva:{parse:parse.hsva},rgb8:{parse:function(v){v=v.slice(0);v.push(1);return parse.rgba(v)}},rgba8:{parse:function(v){return parse.rgba8(v)}},packed_rgba:{parse:function(v){v=[v>>24&255,v>>16&255,v>>8&255,(v&255)/255];return parse.rgba(v)},output:function(v){return unsigned(f2b(v[0])<<24|f2b(v[1])<<16|f2b(v[2])<<8|f2b(v[3]))}},packed_argb:{parse:function(v){v=[v>>16&255,v>>8&255,v>>0&255,(v>>24&255)/255];return parse.rgba(v)},output:function(v){return unsigned(f2b(v[3])<<24|f2b(v[0])<<16|f2b(v[1])<<8|f2b(v[2]))}},float3:{parse:parse.float3},float4:{parse:parse.float4}};function Color(value){this._value=value}var color=function(){var match=null;if(arguments[0]instanceof Color){return new Color(arguments[0]._value)}else if(typeof arguments[0]=="string"){var first=arguments[0][0];if(first=="#"){if(match=arguments[0].match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/i)){return new Color(hex4ToRgba(match[0]))}else if(match=arguments[0].match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/i)){return new Color(hex7ToRgba(match[0]))}}else if(match=supportedFormats[arguments[0].toLowerCase()]){if(arguments.length==2)return match.parse(arguments[1]);else return match.parse(slice(arguments,1))}else if(match=arguments[0].match(/^\s*([A-Z][A-Z0-9_]+)\s*\(\s*([\-0-9A-FX]+)\s*\)\s*$/i)){var format=supportedFormats[match[1].toLowerCase()];return format.parse(match[2])}else if(match=arguments[0].match(/^\s*([A-Z][A-Z0-9]+)\s*\(\s*([0-9\.]+%?)\s*,\s*([0-9\.]+%?)\s*,\s*([0-9\.]+%?)\s*(,\s*([0-9\.]+%?)\s*)?\)\s*$/i)){var format=supportedFormats[match[1].toLowerCase()];if(match[5]===undefined){var v=[match[2],match[3],match[4]];return format.parse(v)}else{var v=[match[2],match[3],match[4],match[6]];return format.parse(v)}}else if(arguments.length==1&&(match=namedColors[trimLc(arguments[0])])){var v=match;return new Color([b2f(v[0]),b2f(v[1]),b2f(v[2]),1])}}throw"Could not parse color '"+arguments[0]+"'"};var fixed={white:color("white"),black:color("black"),gray:color("gray")};function modifyComponent(index,arg){if(arg==undefined)return f2b(this._value[index]);var v=slice(this._value,0);if(typeof arg=="string"){var m;if(m=arg.match(/^([+\-\\*]=?)([0-9.]+)/)){var op=m[1];var offset=parseFloat(m[2]);switch(op[0]){case"+":v[index]+=offset/255;break;case"-":v[index]-=offset/255;break;case"*":v[index]*=offset;break}if(op[1]=="="){this._value=v;return this}else return new Color(v)}}else{var clone=this.clone();clone._value[index]=arg;return clone}}function modifyHsva(i){return function(){function change(obj,op,value){value=parseFloat(value);var hsva=rgbaToHsva(obj._value);var c=0;switch(op){case"=":hsva[i]=value;c=1;break;case"+":hsva[i]+=value;c=1;break;case"+=":hsva[i]+=value;break;case"-":hsva[i]-=value;c=1;break;case"-=":hsva[i]-=value;break;case"*":hsva[i]*=value;c=1;break;case"*=":hsva[i]*=value;break;default:throw"Bad op "+op}if(i==0)hsva[i]=normalize360(hsva[i]);else if(i==1||i==2){if(hsva[i]<0)hsva[i]=0;else if(hsva[i]>99)hsva[i]=99}if(c)obj=obj.clone();obj._value=hsvaToRgba(hsva);return obj}if(arguments.length==0)return rgbaToHsva(this._value)[i];else if(arguments.length==1){var m;if(typeof arguments[0]=="string"&&(m=arguments[0].match(/^([\+\-\*]=?)([0-9.]+)/)))return change(this,m[1],m[2]);else return change(this,"=",arguments[0])}else if(arguments.length==2)return change(this,arguments[0],arguments[1])}}var methods={clone:function(){return new Color(this._value.slice(0))},html:function(){var self=this;var v=this._value;var _fmt={hex3:function(){return self.hex3()},hex6:function(){return self.hex6()},rgb:function(){return"rgb("+self.rgb().join(",")+")"},rgba:function(){return"rgba("+self.rgba().join(",")+")"},hsl:function(){return"hsl("+rgbaToHsl(v).join(",")+")"},hsla:function(){return"hsla("+rgbaToHsla(v).join(",")+")"},keyword:function(){var dist=3*255*255+1;var keyword;for(name in namedColors){var c=namedColors[name];var d=0;for(var i=0;i<3;++i){var t=v[i]-b2f(c[i]);d+=t*t}if(d<dist){keyword=name;dist=d}}return keyword}};var type=arguments[0]||"rgba";return _fmt[type]()},red:function(){return modifyComponent.call(this,0,arguments[0])},green:function(){return modifyComponent.call(this,1,arguments[0])},blue:function(){return modifyComponent.call(this,2,arguments[0])},alpha:function(){if(arguments.length==1){c=this.clone();c._value[3]=parse.floatOrPercent(arguments[0]);return c}else return this._value[3]},alpha8:function(){if(arguments.length==1){c=this.clone();c._value[3]=parse.byteOrPercent(arguments[0])/255;return c}else return Math.floor(this._value[3]*255)},grayvalue:function(){var c=this._value;return(c[0]+c[1]+c[2])/3},grayvalue8:function(){return f2b(this.grayvalue())},luminanceFast:function(){var c=this._value;return c[0]*.2126+c[1]*.7152+c[2]*.0722},luminance:function(){function linearize(c){return c<.03928?c/12.92:Math.pow((c+.055)/1.055,2.4)}var r=linearize(this._value[0]);var g=linearize(this._value[1]);var b=linearize(this._value[2]);return r*.2126+g*.7152+b*.0722},luminance8:function(){return f2b(this.luminance())},luminanceFast8:function(){return f2b(this.luminanceFast())},hsv:function(){return rgbaToHsva(this._value).slice(0,3)},hsva:function(){return rgbaToHsva(this._value)},packed_rgba:function(){return supportedFormats.packed_rgba.output(this._value)},packed_argb:function(){return supportedFormats.packed_argb.output(this._value)},hue:modifyHsva(0),saturation:modifyHsva(1),value:modifyHsva(2),clamp:function(){var v=this._value;return new Color([clamp(v[0],0,1),clamp(v[1],0,1),clamp(v[2],0,1),clamp(v[3],0,1)])},blend:function(colorToBlend,amount){if(typeof amount!=="number")amount=parse.floatOrPercent(amount);var c=this;var c2=color(colorToBlend);return new Color([mix(c._value[0],c2._value[0],amount),mix(c._value[1],c2._value[1],amount),mix(c._value[2],c2._value[2],amount),mix(c._value[3],c2._value[3],amount)])},add:function(d){var u=this._value;var v=color(d)._value;return new Color([u[0]+v[0]*v[3],u[1]+v[1]*v[3],u[2]+v[2]*v[3],u[3]])},inc:function(d){var u=this._value;var v=color(d)._value;u[0]+=v[0]*v[3];u[1]+=v[1]*v[3];u[2]+=v[2]*v[3];return this},dec:function(d){var u=this._value;var v=color(d)._value;u[0]-=v[0]*v[3];u[1]-=v[1]*v[3];u[2]-=v[2]*v[3];return this},subtract:function(d){var u=this._value;var v=color(d)._value;return new Color([u[0]-v[0]*v[3],u[1]-v[1]*v[3],u[2]-v[2]*v[3],u[3]])},multiply:function(d){var u=this._value;var v=color(d)._value;return new Color([u[0]*v[0],u[1]*v[1],u[2]*v[2],u[3]*v[3]])},scale:function(d){var u=this._value;return new Color([u[0]*d,u[1]*d,u[2]*d,u[3]])},xor:function(d){var u=this.rgba8();var v=color(d).rgba8();return color("rgba8",u[0]^v[0],u[1]^v[1],u[2]^v[2],u[3])},tint:function(amount){return this.blend(fixed.white,amount)},shade:function(amount){return this.blend(fixed.black,amount)},tone:function(amount){return this.blend(fixed.gray,amount)},complement:function(){var hsva=this.hsva();hsva[0]=normalize360(hsva[0]+180);return new Color(hsvaToRgba(hsva))},triad:function(){return[new Color(this._value),this.hue("+120"),this.hue("+240")]},hueSet:function(){var h=0;var set=[];for(var s=100;s>=30;s-=35)for(var v=100;v>=30;v-=35)set.push(this.hue("+",h).saturation(s).value(v));return set},hueRange:function(range,count){var base=this.hue();var set=[];for(var i=0;i<count;++i){var h=base+2*(i/(count-1)-.5)*range;set.push(this.hue("=",h))}return set},contrastWhiteBlack:function(){return this.value()<50?color("white"):color("black")},contrastGray:function(){var hsva=this.hsva();var value=hsva[2]<30?hsva[2]+20:hsva[2]-20;return new Color(hsvaToRgba([hsva[0],0,value,hsva[3]]))},contrastText:function(){var c=this._value;var b=.241*c[0]*c[0]+.691*c[1]*c[1]+.068*c[2]*c[2];return b<.51?color("white"):color("black")},hex3:function(){function hex(d,max){return Math.min(Math.round(f2b(d)/16),15).toString(16)}return"#"+hex(this._value[0])+hex(this._value[1])+hex(this._value[2])},hex6:function(){function hex(d,max){var h=f2b(d).toString(16);return h.length<2?"0"+h:h}return"#"+hex(this._value[0])+hex(this._value[1])+hex(this._value[2])},rgb:function(){var v=this._value;return[f2b(v[0]),f2b(v[1]),f2b(v[2])]},rgba:function(){var v=this._value;return[f2b(v[0]),f2b(v[1]),f2b(v[2]),v[3]]},rgb8:function(){var v=this._value;return[f2b(v[0]),f2b(v[1]),f2b(v[2])]},rgba8:function(){var v=this._value;return[f2b(v[0]),f2b(v[1]),f2b(v[2]),this.alpha8()]},float3:function(){return[this._value[0],this._value[1],this._value[2]]},float4:function(){return[this._value[0],this._value[1],this._value[2],this._value[3]]}};methods["sub"]=methods["subtract"];methods["mul"]=methods["multiply"];for(var name in methods)Color.prototype[name]=methods[name];color.float3=function(r,g,b){return new Color([r,g,b,1])};color.float4=function(r,g,b,a){return new Color([r,g,b,a])};color.version="0.2.5";color.Color=Color;if(typeof module!=="undefined"&&module.exports){module.exports=color}else if(typeof window!=="undefined"){window.pusher=window.pusher||{};window.pusher.color=color}else if(typeof self!="undefined"){self.pusher=self.pusher||{};self.pusher.color=color}})();
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdownToggle","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/popup.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset-titles.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(a,b,c){function d(a){for(var b in a)if(void 0!==f.style[b])return a[b]}var e=function(d,f,g){g=g||{};var h=a.defer(),i=e[g.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(f)?d.addClass(f):angular.isFunction(f)?f(d):angular.isObject(f)&&d.css(f),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},f=document.createElement("trans"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},h={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return e.transitionEndEventName=d(g),e.animationEndEventName=d(h),e}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(a){var b=function(a,b,c){b.removeClass("collapse"),b.css({height:c});b[0].offsetWidth;b.addClass("collapse")};return{link:function(c,d,e){var f,g=!0;c.$watch(e.collapse,function(a){a?k():j()});var h,i=function(b){return h&&h.cancel(),h=a(d,b),h.then(function(){h=void 0},function(){h=void 0}),h},j=function(){g?(g=!1,f||(b(c,d,"auto"),d.addClass("in"))):i({height:d[0].scrollHeight+"px"}).then(function(){f||(b(c,d,"auto"),d.addClass("in"))}),f=!1},k=function(){f=!0,d.removeClass("in"),g?(g=!1,b(c,d,0)):(b(c,d,d[0].scrollHeight+"px"),i({height:"0"}))}}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.scope=a,this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(this.groups.indexOf(a),1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",["$parse","$transition","$timeout",function(a){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@"},controller:["$scope",function(){this.setHeading=function(a){this.heading=a}}],link:function(b,c,d,e){var f,g;e.addGroup(b),b.isOpen=!1,d.isOpen&&(f=a(d.isOpen),g=f.assign,e.scope.$watch(f,function(a){b.isOpen=!!a})),b.$watch("isOpen",function(a){a&&e.closeOthers(b),g&&g(e.scope,a)})}}}]).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",compile:function(a,b,c){return function(a,b,d,e){e.setHeading(c(a,function(){}))}}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("ui.bootstrap.alert",[]).directive("alert",function(){return{restrict:"EA",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"=",close:"&"},link:function(a,b,c){a.closeable="close"in c}}}),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(a,b,c){b.addClass("ng-binding").data("$binding",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).directive("btnRadio",["buttonConfig",function(a){var b=a.activeClass||"active",c=a.toggleEvent||"click";return{require:"ngModel",link:function(a,d,e,f){f.$render=function(){d.toggleClass(b,angular.equals(f.$modelValue,a.$eval(e.btnRadio)))},d.bind(c,function(){d.hasClass(b)||a.$apply(function(){f.$setViewValue(a.$eval(e.btnRadio)),f.$render()})})}}}]).directive("btnCheckbox",["buttonConfig",function(a){var b=a.activeClass||"active",c=a.toggleEvent||"click";return{require:"ngModel",link:function(a,d,e,f){function g(){var b=a.$eval(e.btnCheckboxTrue);return angular.isDefined(b)?b:!0}function h(){var b=a.$eval(e.btnCheckboxFalse);return angular.isDefined(b)?b:!1}f.$render=function(){d.toggleClass(b,angular.equals(f.$modelValue,g()))},d.bind(c,function(){a.$apply(function(){f.$setViewValue(d.hasClass(b)?h():g()),f.$render()})})}}}]),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$transition","$q",function(a,b,c){function d(){function c(){f?(a.next(),d()):a.pause()}e&&b.cancel(e);var g=+a.interval;!isNaN(g)&&g>=0&&(e=b(c,g))}var e,f,g=this,h=g.slides=[],i=-1;g.currentSlide=null,g.select=function(e,f){function j(){if(g.currentSlide&&angular.isString(f)&&!a.noTransition&&e.$element){e.$element.addClass(f);{e.$element[0].offsetWidth}angular.forEach(h,function(a){angular.extend(a,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(e,{direction:f,active:!0,entering:!0}),angular.extend(g.currentSlide||{},{direction:f,leaving:!0}),a.$currentTransition=c(e.$element,{}),function(b,c){a.$currentTransition.then(function(){k(b,c)},function(){k(b,c)})}(e,g.currentSlide)}else k(e,g.currentSlide);g.currentSlide=e,i=l,d()}function k(b,c){angular.extend(b,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(c||{},{direction:"",active:!1,leaving:!1,entering:!1}),a.$currentTransition=null}var l=h.indexOf(e);void 0===f&&(f=l>i?"next":"prev"),e&&e!==g.currentSlide&&(a.$currentTransition?(a.$currentTransition.cancel(),b(j)):j())},g.indexOfSlide=function(a){return h.indexOf(a)},a.next=function(){var b=(i+1)%h.length;return a.$currentTransition?void 0:g.select(h[b],"next")},a.prev=function(){var b=0>i-1?h.length-1:i-1;return a.$currentTransition?void 0:g.select(h[b],"prev")},a.select=function(a){g.select(a)},a.isActive=function(a){return g.currentSlide===a},a.slides=function(){return h},a.$watch("interval",d),a.play=function(){f||(f=!0,d())},a.pause=function(){a.noPause||(f=!1,e&&b.cancel(e))},g.addSlide=function(b,c){b.$element=c,h.push(b),1===h.length||b.active?(g.select(h[h.length-1]),1==h.length&&a.play()):b.active=!1},g.removeSlide=function(a){var b=h.indexOf(a);h.splice(b,1),h.length>0&&a.active?b>=h.length?g.select(h[b-1]):g.select(h[b]):i>b&&i--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",["$parse",function(a){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{},link:function(b,c,d,e){if(d.active){var f=a(d.active),g=f.assign,h=b.active=f(b.$parent);b.$watch(function(){var a=f(b.$parent);return a!==b.active&&(a!==h?h=b.active=a:g(b.$parent,a=h=b.active)),a})}e.addSlide(b,c),b.$on("$destroy",function(){e.removeSlide(b)}),b.$watch("active",function(a){a&&e.select(b)})}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].body.scrollTop||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].body.scrollLeft||a[0].documentElement.scrollLeft)}}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.position"]).constant("datepickerConfig",{dayFormat:"dd",monthFormat:"MMMM",yearFormat:"yyyy",dayHeaderFormat:"EEE",dayTitleFormat:"MMMM yyyy",monthTitleFormat:"yyyy",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","dateFilter","datepickerConfig",function(a,b,c,d){function e(b,c){return angular.isDefined(b)?a.$parent.$eval(b):c}function f(a,b){return new Date(a,b,0).getDate()}function g(a,b){for(var c=new Array(b),d=a,e=0;b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a,b,d,e){return{date:a,label:c(a,b),selected:!!d,secondary:!!e}}var i={day:e(b.dayFormat,d.dayFormat),month:e(b.monthFormat,d.monthFormat),year:e(b.yearFormat,d.yearFormat),dayHeader:e(b.dayHeaderFormat,d.dayHeaderFormat),dayTitle:e(b.dayTitleFormat,d.dayTitleFormat),monthTitle:e(b.monthTitleFormat,d.monthTitleFormat)},j=e(b.startingDay,d.startingDay),k=e(b.yearRange,d.yearRange);this.minDate=d.minDate?new Date(d.minDate):null,this.maxDate=d.maxDate?new Date(d.maxDate):null,this.modes=[{name:"day",getVisibleDates:function(a,b){var d=a.getFullYear(),e=a.getMonth(),k=new Date(d,e,1),l=j-k.getDay(),m=l>0?7-l:-l,n=new Date(k),o=0;m>0&&(n.setDate(-m+1),o+=m),o+=f(d,e+1),o+=(7-o%7)%7;for(var p=g(n,o),q=new Array(7),r=0;o>r;r++){var s=new Date(p[r]);p[r]=h(s,i.day,b&&b.getDate()===s.getDate()&&b.getMonth()===s.getMonth()&&b.getFullYear()===s.getFullYear(),s.getMonth()!==e)}for(var t=0;7>t;t++)q[t]=c(p[t].date,i.dayHeader);return{objects:p,title:c(a,i.dayTitle),labels:q}},compare:function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},split:7,step:{months:1}},{name:"month",getVisibleDates:function(a,b){for(var d=new Array(12),e=a.getFullYear(),f=0;12>f;f++){var g=new Date(e,f,1);d[f]=h(g,i.month,b&&b.getMonth()===f&&b.getFullYear()===e)}return{objects:d,title:c(a,i.monthTitle)}},compare:function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},split:3,step:{years:1}},{name:"year",getVisibleDates:function(a,b){for(var c=new Array(k),d=a.getFullYear(),e=parseInt((d-1)/k,10)*k+1,f=0;k>f;f++){var g=new Date(e+f,0,1);c[f]=h(g,i.year,b&&b.getFullYear()===g.getFullYear())}return{objects:c,title:[c[0].label,c[k-1].label].join(" - ")}},compare:function(a,b){return a.getFullYear()-b.getFullYear()},split:5,step:{years:k}}],this.isDisabled=function(b,c){var d=this.modes[c||0];return this.minDate&&d.compare(b,this.minDate)<0||this.maxDate&&d.compare(b,this.maxDate)>0||a.dateDisabled&&a.dateDisabled({date:b,mode:d.name})}}]).directive("datepicker",["dateFilter","$parse","datepickerConfig","$log",function(a,b,c,d){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(a,e,f,g){function h(){a.showWeekNumbers=0===o&&q}function i(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c}function j(b){var c=null,e=!0;n.$modelValue&&(c=new Date(n.$modelValue),isNaN(c)?(e=!1,d.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):b&&(p=c)),n.$setValidity("date",e);var f=m.modes[o],g=f.getVisibleDates(p,c);angular.forEach(g.objects,function(a){a.disabled=m.isDisabled(a.date,o)}),n.$setValidity("date-disabled",!c||!m.isDisabled(c)),a.rows=i(g.objects,f.split),a.labels=g.labels||[],a.title=g.title}function k(a){o=a,h(),j()}function l(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var m=g[0],n=g[1];if(n){var o=0,p=new Date,q=c.showWeeks;f.showWeeks?a.$parent.$watch(b(f.showWeeks),function(a){q=!!a,h()}):h(),f.min&&a.$parent.$watch(b(f.min),function(a){m.minDate=a?new Date(a):null,j()}),f.max&&a.$parent.$watch(b(f.max),function(a){m.maxDate=a?new Date(a):null,j()}),n.$render=function(){j(!0)},a.select=function(a){if(0===o){var b=new Date(n.$modelValue);b.setFullYear(a.getFullYear(),a.getMonth(),a.getDate()),n.$setViewValue(b),j(!0)}else p=a,k(o-1)},a.move=function(a){var b=m.modes[o].step;p.setMonth(p.getMonth()+a*(b.months||0)),p.setFullYear(p.getFullYear()+a*(b.years||0)),j()},a.toggleMode=function(){k((o+1)%m.modes.length)},a.getWeekNumber=function(b){return 0===o&&a.showWeekNumbers&&7===b.length?l(b[0].date):null}}}}}]).constant("datepickerPopupConfig",{dateFormat:"yyyy-MM-dd",currentText:"Today",toggleWeeksText:"Weeks",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","datepickerPopupConfig","datepickerConfig",function(a,b,c,d,e,f,g){return{restrict:"EA",require:"ngModel",link:function(h,i,j,k){function l(a){v?v(h,!!a):t.isOpen=!!a}function m(a){if(a){if(angular.isDate(a))return k.$setValidity("date",!0),a;if(angular.isString(a)){var b=new Date(a);return isNaN(b)?(k.$setValidity("date",!1),void 0):(k.$setValidity("date",!0),b)}return k.$setValidity("date",!1),void 0}return k.$setValidity("date",!0),null}function n(){t.date=k.$modelValue,p()}function o(a,c,d){a&&(h.$watch(b(a),function(a){t[c]=a}),z.attr(d||c,c))}function p(){t.position=s?d.offset(i):d.position(i),t.position.top=t.position.top+i.prop("offsetHeight")}var q;j.$observe("datepickerPopup",function(a){q=a||f.dateFormat,k.$render()});var r=angular.isDefined(j.closeOnDateSelection)?h.$eval(j.closeOnDateSelection):f.closeOnDateSelection,s=angular.isDefined(j.datepickerAppendToBody)?h.$eval(j.datepickerAppendToBody):f.appendToBody,t=h.$new();h.$on("$destroy",function(){t.$destroy()}),j.$observe("currentText",function(a){t.currentText=angular.isDefined(a)?a:f.currentText}),j.$observe("toggleWeeksText",function(a){t.toggleWeeksText=angular.isDefined(a)?a:f.toggleWeeksText}),j.$observe("clearText",function(a){t.clearText=angular.isDefined(a)?a:f.clearText}),j.$observe("closeText",function(a){t.closeText=angular.isDefined(a)?a:f.closeText});var u,v;j.isOpen&&(u=b(j.isOpen),v=u.assign,h.$watch(u,function(a){t.isOpen=!!a})),t.isOpen=u?u(h):!1;var w=function(a){t.isOpen&&a.target!==i[0]&&t.$apply(function(){l(!1)})},x=function(){t.$apply(function(){l(!0)})},y=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");y.attr({"ng-model":"date","ng-change":"dateSelection()"});var z=angular.element(y.children()[0]);j.datepickerOptions&&z.attr(angular.extend({},h.$eval(j.datepickerOptions))),k.$parsers.unshift(m),t.dateSelection=function(){k.$setViewValue(t.date),k.$render(),r&&l(!1)},i.bind("input change keyup",function(){t.$apply(function(){n()})}),k.$render=function(){var a=k.$viewValue?e(k.$viewValue,q):"";i.val(a),n()},o(j.min,"min"),o(j.max,"max"),j.showWeeks?o(j.showWeeks,"showWeeks","show-weeks"):(t.showWeeks=g.showWeeks,z.attr("show-weeks","showWeeks")),j.dateDisabled&&z.attr("date-disabled",j.dateDisabled);var A=!1,B=!1;t.$watch("isOpen",function(a){a?(p(),c.bind("click",w),B&&i.unbind("focus",x),i[0].focus(),A=!0):(A&&c.unbind("click",w),i.bind("focus",x),B=!0),v&&v(h,a)});var C=b(j.ngModel).assign;t.today=function(){C(h,new Date)},t.clear=function(){C(h,null)};var D=a(y)(t);s?c.find("body").append(D):i.after(D)}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(a,b){b.bind("click",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module("ui.bootstrap.dropdownToggle",[]).directive("dropdownToggle",["$document","$location",function(a){var b=null,c=angular.noop;return{restrict:"CA",link:function(d,e){d.$watch("$location.path",function(){c()}),e.parent().bind("click",function(){c()}),e.bind("click",function(d){var f=e===b;d.preventDefault(),d.stopPropagation(),b&&c(),f||e.hasClass("disabled")||e.prop("disabled")||(e.parent().addClass("open"),b=e,c=function(d){d&&(d.preventDefault(),d.stopPropagation()),a.unbind("click",c),e.parent().removeClass("open"),c=angular.noop,b=null},a.bind("click",c))})}}}]),angular.module("ui.bootstrap.modal",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$modalStack","$timeout",function(a,b){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(c){b(function(){c.animate=!0}),c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))}}}}]).directive("modalWindow",["$timeout",function(a){return{restrict:"EA",scope:{index:"@"},replace:!0,transclude:!0,templateUrl:"template/modal/window.html",link:function(b,c,d){b.windowClass=d.windowClass||"",a(function(){b.animate=!0})}}}]).factory("$modalStack",["$document","$compile","$rootScope","$$stackedMap",function(a,b,c,d){function e(){for(var a=-1,b=k.keys(),c=0;c<b.length;c++)k.get(b[c]).value.backdrop&&(a=c);return a}function f(a){var b=k.get(a).value;k.remove(a),b.modalDomEl.remove(),h&&-1==e()&&(h.remove(),h=void 0),b.modalScope.$destroy()}var g,h,i=c.$new(!0),j=a.find("body").eq(0),k=d.createNew(),l={};return c.$watch(e,function(a){i.index=a}),a.bind("keydown",function(a){var b;27===a.which&&(b=k.top(),b&&b.value.keyboard&&c.$apply(function(){l.dismiss(b.key)}))}),l.open=function(a,c){k.add(a,{deferred:c.deferred,modalScope:c.scope,backdrop:c.backdrop,keyboard:c.keyboard});var d=angular.element("<div modal-window></div>");d.attr("window-class",c.windowClass),d.attr("index",k.length()-1),d.html(c.content);var f=b(d)(c.scope);k.top().value.modalDomEl=f,j.append(f),e()>=0&&!h&&(g=angular.element("<div modal-backdrop></div>"),h=b(g)(i),j.append(h))},l.close=function(a,b){var c=k.get(a);c&&(c.value.deferred.resolve(b),f(a))},l.dismiss=function(a,b){var c=k.get(a).value;c&&(c.deferred.reject(b),f(a))},l.getTop=function(){return k.top()},l}]).provider("$modal",function(){var a={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?d.when(a.template):e.get(a.templateUrl,{cache:f}).then(function(a){return a.data})}function j(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))}),c}var k={};return k.open=function(b){var e=d.defer(),f=d.defer(),k={result:e.promise,opened:f.promise,close:function(a){h.close(k,a)},dismiss:function(a){h.dismiss(k,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var l=d.all([i(b)].concat(j(b.resolve)));return l.then(function(a){var d=(b.scope||c).$new();d.$close=k.close,d.$dismiss=k.dismiss;var f,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=k,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),f=g(b.controller,i)),h.open(k,{scope:d,deferred:e,content:a[0],backdrop:b.backdrop,keyboard:b.keyboard,windowClass:b.windowClass})},function(a){e.reject(a)}),l.then(function(){f.resolve(!0)},function(){f.reject(!1)}),k},k}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse","$interpolate",function(a,b,c,d){var e=this,f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(d){b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){e.itemsPerPage=parseInt(b,10),a.totalPages=e.calculateTotalPages()}):this.itemsPerPage=d},this.noPrevious=function(){return 1===this.page},this.noNext=function(){return this.page===a.totalPages},this.isActive=function(a){return this.page===a},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.getAttributeValue=function(b,c,e){return angular.isDefined(b)?e?d(b)(a.$parent):a.$parent.$eval(b):c},this.render=function(){this.page=parseInt(a.page,10)||1,this.page>0&&this.page<=a.totalPages&&(a.pages=this.getPages(this.page,a.totalPages))},a.selectPage=function(b){!e.isActive(b)&&b>0&&b<=a.totalPages&&(a.page=b,a.onSelectPage({page:b}))},a.$watch("page",function(){e.render()}),a.$watch("totalItems",function(){a.totalPages=e.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),e.page>b?a.selectPage(b):e.render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{page:"=",totalItems:"=",onSelectPage:" &"},controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(c,d,e,f){function g(a,b,c,d){return{number:a,text:b,active:c,disabled:d}}var h,i=f.getAttributeValue(e.boundaryLinks,b.boundaryLinks),j=f.getAttributeValue(e.directionLinks,b.directionLinks),k=f.getAttributeValue(e.firstText,b.firstText,!0),l=f.getAttributeValue(e.previousText,b.previousText,!0),m=f.getAttributeValue(e.nextText,b.nextText,!0),n=f.getAttributeValue(e.lastText,b.lastText,!0),o=f.getAttributeValue(e.rotate,b.rotate);f.init(b.itemsPerPage),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){h=parseInt(a,10),f.render()}),f.getPages=function(a,b){var c=[],d=1,e=b,p=angular.isDefined(h)&&b>h;p&&(o?(d=Math.max(a-Math.floor(h/2),1),e=d+h-1,e>b&&(e=b,d=e-h+1)):(d=(Math.ceil(a/h)-1)*h+1,e=Math.min(d+h-1,b)));for(var q=d;e>=q;q++){var r=g(q,q,f.isActive(q),!1);c.push(r)}if(p&&!o){if(d>1){var s=g(d-1,"...",!1,!1);c.unshift(s)}if(b>e){var t=g(e+1,"...",!1,!1);c.push(t)}}if(j){var u=g(a-1,l,!1,f.noPrevious());c.unshift(u);var v=g(a+1,m,!1,f.noNext());c.push(v)}if(i){var w=g(1,k,!1,f.noPrevious());c.unshift(w);var x=g(b,n,!1,f.noNext());c.push(x)}return c}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{page:"=",totalItems:"=",onSelectPage:" &"},controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(b,c,d,e){function f(a,b,c,d,e){return{number:a,text:b,disabled:c,previous:i&&d,next:i&&e}}var g=e.getAttributeValue(d.previousText,a.previousText,!0),h=e.getAttributeValue(d.nextText,a.nextText,!0),i=e.getAttributeValue(d.align,a.align);e.init(a.itemsPerPage),e.getPages=function(a){return[f(a-1,g,e.noPrevious(),!0,!1),f(a+1,h,e.noNext(),!1,!0)]}}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0},c={mouseenter:"mouseleave",click:"click",focus:"blur"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$parse","$document","$position","$interpolate",function(e,f,g,h,i,j,k){return function(e,l,m){function n(a){var b=a||o.trigger||m,d=c[b]||b;return{show:b,hide:d}}var o=angular.extend({},b,d),p=a(e),q=k.startSymbol(),r=k.endSymbol(),s="<"+p+'-popup title="'+q+"tt_title"+r+'" content="'+q+"tt_content"+r+'" placement="'+q+"tt_placement"+r+'" animation="tt_animation" is-open="tt_isOpen"></'+p+"-popup>";return{restrict:"EA",scope:!0,link:function(a,b,c){function d(){a.tt_isOpen?m():k()}function k(){(!z||a.$eval(c[l+"Enable"]))&&(a.tt_popupDelay?t=g(p,a.tt_popupDelay):a.$apply(p))}function m(){a.$apply(function(){q()})}function p(){var c,d,e,f;if(a.tt_content){switch(r&&g.cancel(r),u.css({top:0,left:0,display:"block"}),w?v.append(u):b.after(u),c=w?j.offset(b):j.position(b),d=u.prop("offsetWidth"),e=u.prop("offsetHeight"),a.tt_placement){case"right":f={top:c.top+c.height/2-e/2,left:c.left+c.width};break;case"bottom":f={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"left":f={top:c.top+c.height/2-e/2,left:c.left-d};break;default:f={top:c.top-e,left:c.left+c.width/2-d/2}}f.top+="px",f.left+="px",u.css(f),a.tt_isOpen=!0}}function q(){a.tt_isOpen=!1,g.cancel(t),a.tt_animation?r=g(function(){u.remove()},500):u.remove()}var r,t,u=f(s)(a),v=i.find("body"),w=angular.isDefined(o.appendToBody)?o.appendToBody:!1,x=n(void 0),y=!1,z=angular.isDefined(c[l+"Enable"]);a.tt_isOpen=!1,c.$observe(e,function(b){b?a.tt_content=b:a.tt_isOpen&&q()}),c.$observe(l+"Title",function(b){a.tt_title=b}),c.$observe(l+"Placement",function(b){a.tt_placement=angular.isDefined(b)?b:o.placement}),c.$observe(l+"Animation",function(b){a.tt_animation=angular.isDefined(b)?!!b:o.animation}),c.$observe(l+"PopupDelay",function(b){var c=parseInt(b,10);a.tt_popupDelay=isNaN(c)?o.popupDelay:c}),c.$observe(l+"Trigger",function(a){y&&(b.unbind(x.show,k),b.unbind(x.hide,m)),x=n(a),x.show===x.hide?b.bind(x.show,d):(b.bind(x.show,k),b.bind(x.hide,m)),y=!0}),c.$observe(l+"AppendToBody",function(b){w=angular.isDefined(b)?h(b)(a):w}),w&&a.$on("$locationChangeSuccess",function(){a.tt_isOpen&&q()}),a.$on("$destroy",function(){g.cancel(t),u.remove(),u.unbind(),u=null,v=null})}}}}]}).directive("tooltipPopup",function(){return{restrict:"E",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"E",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(a){return a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$compile","$timeout","$parse","$window","$tooltip",function(a,b,c,d,e){return e("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",["ui.bootstrap.transition"]).constant("progressConfig",{animate:!0,autoType:!1,stackedTypes:["success","info","warning","danger"]}).controller("ProgressBarController",["$scope","$attrs","progressConfig",function(a,b,c){function d(a){return g[a]}var e=angular.isDefined(b.animate)?a.$eval(b.animate):c.animate,f=angular.isDefined(b.autoType)?a.$eval(b.autoType):c.autoType,g=angular.isDefined(b.stackedTypes)?a.$eval("["+b.stackedTypes+"]"):c.stackedTypes;this.makeBar=function(a,b,c){var g=angular.isObject(a)?a.value:a||0,h=angular.isObject(b)?b.value:b||0,i=angular.isObject(a)&&angular.isDefined(a.type)?a.type:f?d(c||0):null;return{from:h,to:g,type:i,animate:e}},this.addBar=function(b){a.bars.push(b),a.totalPercent+=b.to},this.clearBars=function(){a.bars=[],a.totalPercent=0},this.clearBars()}]).directive("progress",function(){return{restrict:"EA",replace:!0,controller:"ProgressBarController",scope:{value:"=percent",onFull:"&",onEmpty:"&"},templateUrl:"template/progressbar/progress.html",link:function(a,b,c,d){a.$watch("value",function(a,b){if(d.clearBars(),angular.isArray(a))for(var c=0,e=a.length;e>c;c++)d.addBar(d.makeBar(a[c],b[c],c));else d.addBar(d.makeBar(a,b))},!0),a.$watch("totalPercent",function(b){b>=100?a.onFull():0>=b&&a.onEmpty()},!0)}}}).directive("progressbar",["$transition",function(a){return{restrict:"EA",replace:!0,scope:{width:"=",old:"=",type:"=",animate:"="},templateUrl:"template/progressbar/bar.html",link:function(b,c){b.$watch("width",function(d){b.animate?(c.css("width",b.old+"%"),a(c,{width:d+"%"})):c.css("width",d+"%")})}}}]),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","$parse","ratingConfig",function(a,b,c,d){this.maxRange=angular.isDefined(b.max)?a.$parent.$eval(b.max):d.max,this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):d.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):d.stateOff,this.createRateObjects=function(a){for(var b={stateOn:this.stateOn,stateOff:this.stateOff},c=0,d=a.length;d>c;c++)a[c]=angular.extend({index:c},b,a[c]);return a},a.range=angular.isDefined(b.ratingStates)?this.createRateObjects(angular.copy(a.$parent.$eval(b.ratingStates))):this.createRateObjects(new Array(this.maxRange)),a.rate=function(b){a.readonly||a.value===b||(a.value=b)},a.enter=function(b){a.readonly||(a.val=b),a.onHover({value:b})},a.reset=function(){a.val=angular.copy(a.value),a.onLeave()},a.$watch("value",function(b){a.val=b}),a.readonly=!1,b.readonly&&a.$parent.$watch(c(b.readonly),function(b){a.readonly=!!b})}]).directive("rating",function(){return{restrict:"EA",scope:{value:"=",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0}}),angular.module("ui.bootstrap.tabs",[]).directive("tabs",function(){return function(){throw new Error("The `tabs` directive is deprecated, please migrate to `tabset`. Instructions can be found at http://github.com/angular-ui/bootstrap/tree/master/CHANGELOG.md")}}).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(a){a.active=!1}),a.active=!0},b.addTab=function(a){c.push(a),(1===c.length||a.active)&&b.select(a)},b.removeTab=function(a){var d=c.indexOf(a);if(a.active&&c.length>1){var e=d==c.length-1?d-1:d+1;b.select(c[e])}c.splice(d,1)}}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,require:"^tabset",scope:{},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",compile:function(a,b,c){return function(a,b,d,e){a.vertical=angular.isDefined(d.vertical)?a.$parent.$eval(d.vertical):!1,a.type=angular.isDefined(d.type)?a.$parent.$eval(d.type):"tabs",a.direction=angular.isDefined(d.direction)?a.$parent.$eval(d.direction):"top",a.tabsAbove="below"!=a.direction,e.$scope=a,e.$transcludeFn=c
}}}}).directive("tab",["$parse",function(a){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(b,c,d){return function(b,c,e,f){var g,h;e.active?(g=a(e.active),h=g.assign,b.$parent.$watch(g,function(a,c){a!==c&&(b.active=!!a)}),b.active=g(b.$parent)):h=g=angular.noop,b.$watch("active",function(a){h(b.$parent,a),a?(f.select(b),b.onSelect()):b.onDeselect()}),b.disabled=!1,e.disabled&&b.$parent.$watch(a(e.disabled),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},f.addTab(b),b.$on("$destroy",function(){f.removeTab(b)}),b.$transcludeFn=d}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}]).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}).directive("tabsetTitles",function(){return{restrict:"A",require:"^tabset",templateUrl:"template/tabs/tabset-titles.html",replace:!0,link:function(a,b,c,d){a.$eval(c.tabsetTitles)?d.$transcludeFn(d.$scope.$parent,function(a){b.append(a)}):b.remove()}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:["AM","PM"],readonlyInput:!1,mousewheel:!0}).directive("timepicker",["$parse","$log","timepickerConfig",function(a,b,c){return{restrict:"EA",require:"?^ngModel",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(d,e,f,g){function h(){var a=parseInt(d.hours,10),b=d.showMeridian?a>0&&13>a:a>=0&&24>a;return b?(d.showMeridian&&(12===a&&(a=0),d.meridian===p[1]&&(a+=12)),a):void 0}function i(){var a=parseInt(d.minutes,10);return a>=0&&60>a?a:void 0}function j(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a}function k(a){l(),g.$setViewValue(new Date(o)),m(a)}function l(){g.$setValidity("time",!0),d.invalidHours=!1,d.invalidMinutes=!1}function m(a){var b=o.getHours(),c=o.getMinutes();d.showMeridian&&(b=0===b||12===b?12:b%12),d.hours="h"===a?b:j(b),d.minutes="m"===a?c:j(c),d.meridian=o.getHours()<12?p[0]:p[1]}function n(a){var b=new Date(o.getTime()+6e4*a);o.setHours(b.getHours(),b.getMinutes()),k()}if(g){var o=new Date,p=c.meridians,q=c.hourStep;f.hourStep&&d.$parent.$watch(a(f.hourStep),function(a){q=parseInt(a,10)});var r=c.minuteStep;f.minuteStep&&d.$parent.$watch(a(f.minuteStep),function(a){r=parseInt(a,10)}),d.showMeridian=c.showMeridian,f.showMeridian&&d.$parent.$watch(a(f.showMeridian),function(a){if(d.showMeridian=!!a,g.$error.time){var b=h(),c=i();angular.isDefined(b)&&angular.isDefined(c)&&(o.setHours(b),k())}else m()});var s=e.find("input"),t=s.eq(0),u=s.eq(1),v=angular.isDefined(f.mousewheel)?d.$eval(f.mousewheel):c.mousewheel;if(v){var w=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};t.bind("mousewheel wheel",function(a){d.$apply(w(a)?d.incrementHours():d.decrementHours()),a.preventDefault()}),u.bind("mousewheel wheel",function(a){d.$apply(w(a)?d.incrementMinutes():d.decrementMinutes()),a.preventDefault()})}if(d.readonlyInput=angular.isDefined(f.readonlyInput)?d.$eval(f.readonlyInput):c.readonlyInput,d.readonlyInput)d.updateHours=angular.noop,d.updateMinutes=angular.noop;else{var x=function(a,b){g.$setViewValue(null),g.$setValidity("time",!1),angular.isDefined(a)&&(d.invalidHours=a),angular.isDefined(b)&&(d.invalidMinutes=b)};d.updateHours=function(){var a=h();angular.isDefined(a)?(o.setHours(a),k("h")):x(!0)},t.bind("blur",function(){!d.validHours&&d.hours<10&&d.$apply(function(){d.hours=j(d.hours)})}),d.updateMinutes=function(){var a=i();angular.isDefined(a)?(o.setMinutes(a),k("m")):x(void 0,!0)},u.bind("blur",function(){!d.invalidMinutes&&d.minutes<10&&d.$apply(function(){d.minutes=j(d.minutes)})})}g.$render=function(){var a=g.$modelValue?new Date(g.$modelValue):null;isNaN(a)?(g.$setValidity("time",!1),b.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(a&&(o=a),l(),m())},d.incrementHours=function(){n(60*q)},d.decrementHours=function(){n(60*-q)},d.incrementMinutes=function(){n(r)},d.decrementMinutes=function(){n(-r)},d.toggleMeridian=function(){n(720*(o.getHours()<12?1:-1))}}}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error("Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_' but got '"+c+"'.");return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:"ngModel",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=b(k.ngModel).assign,u=g.parse(k.typeahead),v=angular.element("<div typeahead-popup></div>");v.attr({matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(k.typeaheadTemplateUrl)&&v.attr("template-url",k.typeaheadTemplateUrl);var w=i.$new();i.$on("$destroy",function(){w.$destroy()});var x=function(){w.matches=[],w.activeIdx=-1},y=function(a){var b={$viewValue:a};q(i,!0),c.when(u.source(i,b)).then(function(c){if(a===l.$viewValue&&m){if(c.length>0){w.activeIdx=0,w.matches.length=0;for(var d=0;d<c.length;d++)b[u.itemName]=c[d],w.matches.push({label:u.viewMapper(w,b),model:c[d]});w.query=a,w.position=f.position(j),w.position.top=w.position.top+j.prop("offsetHeight")}else x();q(i,!1)}},function(){x(),q(i,!1)})};x(),w.query=void 0;var z;l.$parsers.unshift(function(a){return m=!0,a&&a.length>=n?o>0?(z&&d.cancel(z),z=d(function(){y(a)},o)):y(a):(q(i,!1),x()),p?a:a?(l.$setValidity("editable",!1),void 0):(l.$setValidity("editable",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return s?(d.$model=a,s(i,d)):(d[u.itemName]=a,b=u.viewMapper(i,d),d[u.itemName]=void 0,c=u.viewMapper(i,d),b!==c?b:a)}),w.select=function(a){var b,c,d={};d[u.itemName]=c=w.matches[a].model,b=u.modelMapper(i,d),t(i,b),l.$setValidity("editable",!0),r(i,{$item:c,$model:b,$label:u.viewMapper(i,d)}),x(),j[0].focus()},j.bind("keydown",function(a){return 0===w.matches.length||-1===h.indexOf(a.which)?(13===a.which&&a.preventDefault(),void 0):(a.preventDefault(),40===a.which?(w.activeIdx=(w.activeIdx+1)%w.matches.length,w.$digest()):38===a.which?(w.activeIdx=(w.activeIdx?w.activeIdx:w.matches.length)-1,w.$digest()):13===a.which||9===a.which?w.$apply(function(){w.select(w.activeIdx)}):27===a.which&&(a.stopPropagation(),x(),w.$digest()),void 0)}),j.bind("blur",function(){m=!1});var A=function(a){j[0]!==a.target&&(x(),w.$digest())};e.bind("click",A),i.$on("$destroy",function(){e.unbind("click",A)}),j.after(a(v)(w))}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(a,b,c,d){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(e,f,g){var h=d(g.templateUrl)(e.$parent)||"template/typeahead/typeahead-match.html";a.get(h,{cache:b}).success(function(a){f.replaceWith(c(a.trim())(e))})}}}]).filter("typeaheadHighlight",function(){function a(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?b.replace(new RegExp(a(c),"gi"),"<strong>$&</strong>"):b}}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="accordion-group">\n  <div class="accordion-heading" ><a class="accordion-toggle" ng-click="isOpen = !isOpen" accordion-transclude="heading">{{heading}}</a></div>\n  <div class="accordion-body" collapse="!isOpen">\n    <div class="accordion-inner" ng-transclude></div>  </div>\n</div>')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="accordion" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html","<div class='alert' ng-class='type && \"alert-\" + type'>\n    <button ng-show='closeable' type='button' class='close' ng-click='close()'>&times;</button>\n    <div ng-transclude></div>\n</div>\n")}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel">\n    <ol class="carousel-indicators" ng-show="slides().length > 1">\n        <li ng-repeat="slide in slides()" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a ng-click="prev()" class="carousel-control left" ng-show="slides().length > 1">&lsaquo;</a>\n    <a ng-click="next()" class="carousel-control right" ng-show="slides().length > 1">&rsaquo;</a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html","<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item\" ng-transclude></div>\n")}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<table>\n  <thead>\n    <tr class="text-center">\n      <th><button type="button" class="btn pull-left" ng-click="move(-1)"><i class="icon-chevron-left"></i></button></th>\n      <th colspan="{{rows[0].length - 2 + showWeekNumbers}}"><button type="button" class="btn btn-block" ng-click="toggleMode()"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn pull-right" ng-click="move(1)"><i class="icon-chevron-right"></i></button></th>\n    </tr>\n    <tr class="text-center" ng-show="labels.length > 0">\n      <th ng-show="showWeekNumbers">#</th>\n      <th ng-repeat="label in labels">{{label}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows">\n      <td ng-show="showWeekNumbers" class="text-center"><em>{{ getWeekNumber(row) }}</em></td>\n      <td ng-repeat="dt in row" class="text-center">\n        <button type="button" style="width:100%;" class="btn" ng-class="{\'btn-info\': dt.selected}" ng-click="select(dt.date)" ng-disabled="dt.disabled"><span ng-class="{muted: dt.secondary}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}">\n	<li ng-transclude></li>\n	<li class="divider"></li>\n	<li style="padding: 9px;">\n		<span class="btn-group">\n			<button type="button" class="btn btn-small btn-inverse" ng-click="today()">{{currentText}}</button>\n			<button type="button" class="btn btn-small btn-info" ng-click="showWeeks = ! showWeeks" ng-class="{active: showWeeks}">{{toggleWeeksText}}</button>\n			<button type="button" class="btn btn-small btn-danger" ng-click="clear()">{{clearText}}</button>\n		</span>\n		<button type="button" class="btn btn-small btn-success pull-right" ng-click="isOpen = false">{{closeText}}</button>\n	</li>\n</ul>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div class="modal-backdrop fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1040 + index*10}" ng-click="close($event)"></div>')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div class="modal fade {{ windowClass }}" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10}" ng-transclude></div>')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<div class="pager">\n  <ul>\n    <li ng-repeat="page in pages" ng-class="{disabled: page.disabled, previous: page.previous, next: page.next}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  </ul>\n</div>\n')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<div class="pagination"><ul>\n  <li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  </ul>\n</div>\n')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="bar" ng-class=\'type && "bar-" + type\'></div>')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress"><progressbar ng-repeat="bar in bars" width="bar.to" old="bar.from" animate="bar.animate" type="bar.type"></progressbar></div>')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()">\n	<i ng-repeat="r in range" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" ng-class="$index < val && (r.stateOn || \'icon-star\') || (r.stateOff || \'icon-star-empty\')"></i>\n</span>')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset-titles.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset-titles.html","<ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical}\">\n</ul>\n")}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'\n<div class="tabbable" ng-class="{\'tabs-right\': direction == \'right\', \'tabs-left\': direction == \'left\', \'tabs-below\': direction == \'below\'}">\n  <div tabset-titles="tabsAbove"></div>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n  <div tabset-titles="!tabsAbove"></div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table class="form-inline">\n	<tr class="text-center">\n		<td><a ng-click="incrementHours()" class="btn btn-link"><i class="icon-chevron-up"></i></a></td>\n		<td>&nbsp;</td>\n		<td><a ng-click="incrementMinutes()" class="btn btn-link"><i class="icon-chevron-up"></i></a></td>\n		<td ng-show="showMeridian"></td>\n	</tr>\n	<tr>\n		<td class="control-group" ng-class="{\'error\': invalidHours}"><input type="text" ng-model="hours" ng-change="updateHours()" class="span1 text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2"></td>\n		<td>:</td>\n		<td class="control-group" ng-class="{\'error\': invalidMinutes}"><input type="text" ng-model="minutes" ng-change="updateMinutes()" class="span1 text-center" ng-readonly="readonlyInput" maxlength="2"></td>\n		<td ng-show="showMeridian"><button type="button" ng-click="toggleMeridian()" class="btn text-center">{{meridian}}</button></td>\n	</tr>\n	<tr class="text-center">\n		<td><a ng-click="decrementHours()" class="btn btn-link"><i class="icon-chevron-down"></i></a></td>\n		<td>&nbsp;</td>\n		<td><a ng-click="decrementMinutes()" class="btn btn-link"><i class="icon-chevron-down"></i></a></td>\n		<td ng-show="showMeridian"></td>\n	</tr>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html","<ul class=\"typeahead dropdown-menu\" ng-style=\"{display: isOpen()&&'block' || 'none', top: position.top+'px', left: position.left+'px'}\">\n"+'    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>')}]);
angular.module('color-pusher-widget.templates', ['widget.tpl.html', 'color-pusher.jade', 'colour-lovers.jade']);

angular.module("widget.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("widget.tpl.html",
    "<div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "\n" +
    "    <form class=\"form-horizontal\" role=\"form\">\n" +
    "      <div class=\"form-group\" ng-repeat=\"color in colors track by $index + color\">\n" +
    "\n" +
    "        <button type=\"button\" class=\"pull-left margin-left-15 btn btn-default btn-sm\"\n" +
    "          title=\"Remove this color\"\n" +
    "          ng-click=\"removeColor($index);\">\n" +
    "          <span class=\"glyphicon glyphicon-remove\"></span>\n" +
    "        </button>\n" +
    "\n" +
    "        <label for=\"colorPicker{{$index}}\"\n" +
    "          class=\"col-sm-1 control-label\">color {{$index}}</label>\n" +
    "        <div class=\"col-sm-2\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <input\n" +
    "              id=\"colorPicker{{$index}}\"\n" +
    "              class=\"form-control\"\n" +
    "              type=\"text\"\n" +
    "              minicolors=\"hueSettings\"\n" +
    "              ng-model=\"colors[$index]\">\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-sm-2 semi-tight\">\n" +
    "          <button type=\"button\" class=\"tight btn btn-default btn-xs\"\n" +
    "            title=\"Decrease hue\" ng-click=\"changeColor($index, 'hue', '-2');\">\n" +
    "            <span class=\"glyphicon glyphicon-arrow-left\"></span>\n" +
    "          </button>\n" +
    "          <button type=\"button\" class=\"tight btn btn-default btn-xs\"\n" +
    "            title=\"Increase hue\" ng-click=\"changeColor($index, 'hue', '+2');\">\n" +
    "            <span class=\"glyphicon glyphicon-arrow-right\"></span>\n" +
    "          </button>\n" +
    "\n" +
    "          <button type=\"button\" class=\"tight btn btn-default btn-xs\"\n" +
    "            title=\"Decrease saturation\" ng-click=\"changeColor($index, 'saturation', '-1');\">\n" +
    "            <span class=\"glyphicon glyphicon-chevron-down\"></span>\n" +
    "          </button>\n" +
    "          <button type=\"button\" class=\"tight btn btn-default btn-xs\"\n" +
    "            title=\"Increase saturation\" ng-click=\"changeColor($index, 'saturation', '+1');\">\n" +
    "            <span class=\"glyphicon glyphicon-chevron-up\"></span>\n" +
    "          </button>\n" +
    "\n" +
    "          <button type=\"button\" class=\"tight btn btn-default btn-xs\"\n" +
    "            title=\"Decrease value\" ng-click=\"changeColor($index, 'value', '-1');\">\n" +
    "            <span class=\"glyphicon glyphicon-circle-arrow-down\"></span>\n" +
    "          </button>\n" +
    "          <button type=\"button\" class=\"tight btn btn-default btn-xs\"\n" +
    "            title=\"Increase value\" ng-click=\"changeColor($index, 'value', '+1');\">\n" +
    "            <span class=\"glyphicon glyphicon-circle-arrow-up\"></span>\n" +
    "          </button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-sm-2 semi-tight\">\n" +
    "          <input type=\"text\" class=\"form-control\"\n" +
    "            id=\"selector{{$index}}\"\n" +
    "            placeholder=\".alert-info\" required\n" +
    "            ng-model=\"selectors[$index]\">\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-1 semi-tight\">\n" +
    "          <button ng-hide=\"$last\" type=\"button\" class=\"btn btn-default btn-xs basement\"\n" +
    "            title=\"Swap selectors\" ng-click=\"swapSelector($index)\">\n" +
    "            <span class=\"glyphicon glyphicon-sort\"></span>\n" +
    "          </button>\n" +
    "        </div>\n" +
    "\n" +
    "        <label for=\"textColor{{$index}}\"\n" +
    "          class=\"col-sm-1 control-label\">text {{$index}}</label>\n" +
    "        <div class=\"btn-group\" id=\"textColor{{$index}}\">\n" +
    "          <button type=\"button\" class=\"btn btn-default\"\n" +
    "            ng-model=\"textColorStrategy[$index]\" btn-radio=\"'white'\">white</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\"\n" +
    "            ng-model=\"textColorStrategy[$index]\" btn-radio=\"'black'\">black</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\"\n" +
    "            ng-model=\"textColorStrategy[$index]\" btn-radio=\"'auto'\">auto</button>\n" +
    "      </div>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "      <button type=\"button\" class=\"pull-left btn btn-default btn-sm\"\n" +
    "        title=\"Add new color\"\n" +
    "        ng-click=\"addColor();\">\n" +
    "        <span class=\"glyphicon glyphicon-plus\"></span>\n" +
    "      </button>\n" +
    "\n" +
    "      <div class=\"form-group\">\n" +
    "        <center>\n" +
    "\n" +
    "          <button type=\"button\" class=\"btn btn-primary color-pusher\"\n" +
    "            ng-click=\"applyColors()\"\n" +
    "            title=\"apply current colors to selectors\">Apply colors</button>\n" +
    "\n" +
    "          <button type=\"button\" class=\"btn btn-default\"\n" +
    "            data-toggle=\"modal\" data-target=\"#shareResultsModal\"\n" +
    "            title=\"Show current colors as text for easy export\">\n" +
    "            <span class=\"glyphicon glyphicon-share-alt\"></span>\n" +
    "          </button>\n" +
    "\n" +
    "        </center>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group\" ng-show=\"showColourLovers\">\n" +
    "        <colour-lovers></colour-lovers>\n" +
    "      </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"generateButtons\"\n" +
    "            class=\"col-md-2 control-label\">Generate colors based on first color 0</label>\n" +
    "\n" +
    "          <div class=\"col-md-8 input-group\" id=\"generateButtons\">\n" +
    "          <button type=\"button\" class=\"btn btn-default color-pusher\"\n" +
    "            ng-click=\"splitcomplement()\"\n" +
    "            title=\"generate the splitcomplement complements of a base color\">splitcomplement</button>\n" +
    "\n" +
    "          <button type=\"button\" class=\"btn btn-default color-pusher\"\n" +
    "            ng-click=\"monochromatic()\"\n" +
    "            title=\"generate monochromatic colors from base color\">monochromatic</button>\n" +
    "\n" +
    "          <button type=\"button\" class=\"btn btn-default color-pusher\"\n" +
    "            ng-click=\"analogous()\"\n" +
    "            title=\"generate analogous colors from base color\">Analogous</button>\n" +
    "\n" +
    "          <button type=\"button\" class=\"btn btn-default color-pusher\"\n" +
    "            ng-click=\"tetrad()\"\n" +
    "            title=\"generate +3 colors from base color\">Tetrad</button>\n" +
    "\n" +
    "          <button type=\"button\" class=\"btn btn-default color-pusher\"\n" +
    "            ng-click=\"triad()\"\n" +
    "            title=\"generate +2 colors from base color\">Triad</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- Modal -->\n" +
    "  <div class=\"modal fade\" id=\"shareResultsModal\" tabindex=\"-1\"\n" +
    "    role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"\n" +
    "    data-backdrop=\"false\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "      <div class=\"modal-content\">\n" +
    "        <div class=\"modal-header\">\n" +
    "          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n" +
    "          <h4 class=\"modal-title\" id=\"myModalLabel\">Current colors</h4>\n" +
    "        </div>\n" +
    "        <div class=\"modal-body\">\n" +
    "          <pre><code>{{colorsToShare()|json}}</code></pre>\n" +
    "        </div>\n" +
    "        <div class=\"modal-footer\">\n" +
    "          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("color-pusher.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("color-pusher.jade",
    "<div>\n" +
    "  <div ng-hide=\"showColorPusher\">\n" +
    "    <center>\n" +
    "      <button type=\"button\" ng-click=\"showColorPusher=true;\" title=\"Show color-pusher widget\" class=\"show-color-pusher-button btn btn-default\"><span class=\"glyphicon glyphicon-chevron-up\"></span>&nbsp;color-pusher</button>\n" +
    "    </center>\n" +
    "  </div>\n" +
    "  <!-- put large empty space at the end of the page to make sure-->\n" +
    "  <!-- color-pusher does not overlay with main content-->\n" +
    "  <div ng-show=\"showColorPusher\" class=\"color-pusher-spacer\"></div>\n" +
    "  <div ng-show=\"showColorPusher\" class=\"color-pusher\">\n" +
    "    <button id=\"closeColorPusher\" type=\"button\" aria-hidden=\"true\" ng-click=\"showColorPusher=false;\" title=\"Hide color-pusher widget\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-chevron-down\"></span></button>\n" +
    "    <color-pusher-widget show-colour-lovers=\"true\"></color-pusher-widget>\n" +
    "    <center><a href=\"https://github.com/bahmutov/color-pusher\"><strong>color-pusher&nbsp;</strong>&copy; 2013 Gleb Bahmutov</a>&nbsp;<a href=\"https://twitter.com/bahmutov\">@bahmutov</a></center>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("colour-lovers.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("colour-lovers.jade",
    "<div>\n" +
    "  <label for=\"colourLoverPalette\" class=\"control-label col-sm-2\"><a href=\"http://www.colourlovers.com/palettes\" target=\"_blank\">ColourLover Palette</a></label>\n" +
    "  <div class=\"col-sm-6\">\n" +
    "    <div class=\"input-group\">\n" +
    "      <input id=\"colourLoverPalette\" type=\"text\" size=\"80\" placeholder=\"{{placeholder}}\" ng-model=\"paletteId\" class=\"form-control\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-1\">\n" +
    "    <button type=\"button\" ng-click=\"fetchPalette()\" ng-disabled=\"!isValidPalette() || fetchingPalette\" title=\"Pull palette colors\" class=\"btn btn-primary\">Fetch palette</button>\n" +
    "  </div>\n" +
    "</div>");
}]);

(function (angular) {
  console.assert(pusher, 'missing pusher.color plugin');

  var widget = angular.module('color-pusher-widget',
    ['colour-lovers', 'minicolors', 'ui.bootstrap', 'color-pusher-widget.templates']);

  function colorPusherDirective() {
    return {
      restrict: 'E',
      templateUrl: 'widget.tpl.html',
      replace: true,
      transclude: false,
      link: function (scope, element, attrs) {
        scope.setSelectorsAndColors(attrs);

        if (typeof attrs.showColourLovers !== 'undefined') {
          scope.showColourLovers = (attrs.showColourLovers === 'true');
        }

        // make sure modal dialog appears in the center of the body
        // and not just the widget
        $('#shareResultsModal').detach().appendTo('body');
      },
      controller: ['$scope', colorCtrl]
    };
  }

  widget.directive('colorPusherWidget', colorPusherDirective);

  function colorCtrl($scope) {
    console.assert($.xcolor, 'missing jquery.xcolor plugin');
    var xcolor = $.xcolor;

    $scope.showColourLovers = true;
    $scope.defaultSettings = {
      control: 'hue',
      position: 'bottom left',
      theme: 'bootstrap'
    };
    $scope.hueSettings = angular.copy($scope.defaultSettings);

    $scope.colors = ['#f5e384', '#9c846e', '#9c046e', '#6e889c', '#9c846e', '#9c4242'];
    $scope.textColors = ['#ffffff'];
    $scope.textColorStrategy = ['auto'];

    $scope.lastGeneration = null;
    $scope.selectors = ['body', '.well',
      '.alert-info', '.alert-success', '.alert-warning', '.alert-danger'];

    $scope.colorsToShare = function () {
      var result = {};
      $scope.colors.forEach(function (color, index) {
        result[$scope.selectors[index]] = {
          'background-color': color,
          'color': $scope.textColors[index]
        };
      });
      return result;
    };

    $scope.setSelectorsAndColors = function (obj) {
      if (check.unemptyString(obj.selectors)) {
        $scope.selectors = obj.selectors.split(',').map(function (str) {
          return str.trim();
        });
      }
      if (check.unemptyString(obj.colors)) {
        $scope.colors = obj.colors.split(',').map(function (str) {
          return str.trim();
        });
        check.verify.colors($scope.colors);
      }
      $scope.generateForegroundColors();
    };

    $scope.setColors = function (list) {
      check.verify.colors(list);
      $scope.lastGeneration = null;
      $scope.colors = list;
      $scope.applyColors();
    };

    $scope.$on('set-colors', function onSetColors(event, colors) {
      $scope.setColors(colors);
    });

    $scope.$on('selectors-colors', function onSelectorsColors(event, obj) {
      $scope.setSelectorsAndColors(obj);
    });

    $scope.applyColors = function () {
      this.generateForegroundColors();

      var css = {};

      $scope.colors.forEach(function (color, k) {
        var selector = $scope.selectors[k];
        if (color && check.unemptyString(selector)) {
          var textColor = $scope.textColors[k];
          check.verify.color(textColor, 'missing text color for index ' + k);

          css[selector] = {
            backgroundColor: color,
            borderColor: color,
            color: textColor
          };
        }
      });

      $scope.$emit('apply-colors', css);
    };

    function swapWithNext(list, k) {
      check.verify.array(list, 'missing array');
      // cannot swap last item with next one
      console.assert(k >= 0 && k < list.length - 1, 'invalid selector index ' + k);

      var tmp = list[k];
      list[k] = list[k + 1];
      list[k + 1] = tmp;
    }

    $scope.swapSelector = function (k) {
      // cannot swap last selector with next one
      console.assert(k >= 0 && k < $scope.selectors.length - 1, 'invalid selector index ' + k);

      swapWithNext($scope.selectors, k);
    };

    function isCloserToWhiteThanBlack(color) {
      check.verify.color(color, 'expected color, got ' + color);
      return xcolor.distance(color, 'black') > xcolor.distance(color, 'white');
    }

    function textColor(backgroundColor, strategy) {
      if (strategy === 'white') { return '#ffffff'; }
      if (strategy === 'black') { return '#000000'; }

      check.verify.color(backgroundColor, 'expected background color ' + backgroundColor);
      var complement = xcolor.complementary(backgroundColor);
      if (xcolor.readable(complement, backgroundColor)) {
        return complement.getHex();
      }
      return isCloserToWhiteThanBlack(backgroundColor) ? '#000000' : '#ffffff';
    }

    $scope.generateColors = function (operation) {
      check.verify.unemptyString(operation, 'missing generation operation');
      $scope.lastGeneration = operation;

      var baseColor = $scope.colors[0];
      check.verify.color(baseColor,
        'expected base color, have ' + baseColor);

      var generated = xcolor[operation](baseColor);
      check.verify.array(generated,
        'could not get triad array from base color ' + baseColor);
      $scope.colors = generated.map(function (c) {
        return c.getHex();
      });

      this.generateForegroundColors();
    };

    $scope.generateForegroundColors = function () {
      $scope.textColorStrategy = $scope.colors.map(function (color, k) {
        var strategy = $scope.textColorStrategy[k];
        if (check.unemptyString(strategy)) {
          return strategy;
        }
        return 'auto';
      });

      $scope.textColors = $scope.colors.map(function (backgroundColor, k) {
        var strategy = $scope.textColorStrategy[k];
        return textColor(backgroundColor, strategy);
      });
    };

    ['triad', 'tetrad', 'analogous',
      'monochromatic', 'splitcomplement'].forEach(function (op) {
      $scope[op] = $scope.generateColors.bind($scope, op);
    });

    function isValidHSVProperty(property) {
      var properties = {
        'hue': true,
        'saturation': true,
        'value': true
      };
      return properties[property];
    }

    $scope.changeColor = function (index, property, delta) {
      console.assert(index >= 0 && index < $scope.colors.length, 'invalid color index ' + index);
      console.assert(isValidHSVProperty(property), 'invalid property ' + property);
      check.verify.unemptyString(delta, 'delta should be a string, not ' + delta);
      // todo: check if delta starts with + or -

      var hex6 = $scope.colors[index];
      check.verify.unemptyString(hex6, 'missing color for index ' + index + ' have ' + hex6);
      if (!/^#/.test(hex6)) {
        hex6 = '#' + hex6;
      }
      var c = pusher.color(hex6);

      // todo: allow wrapping around 0 / 360 for hue, saturation
      c = c[property](delta);
      hex6 = c.hex6().toLowerCase();
      $scope.colors[index] = hex6;

      $scope.applyColors();
    };

    $scope.removeColor = function (index) {
      check.verify.number(index, 'expected color index to be a number ' + index);
      console.assert(index >= 0 && index < $scope.colors.length,
        'invalid color index ' + index);

      $scope.colors.splice(index, 1);
      $scope.selectors.splice(index, 1);
      $scope.textColors.splice(index, 1);
      $scope.textColorStrategy.splice(index, 1);
    };

    $scope.addColor = function () {
      $scope.colors.push('#efefef');
      $scope.selectors.push('');
      $scope.textColors.push('#000000');
      $scope.textColorStrategy.push('auto');
    };
  }

}(angular));

(function (angular) {
  var app = angular.module('colour-lovers', ['colour-lovers.jade']);

  app.directive('colourLovers', colourLoversDirective);

  function colourLoversDirective() {
    return {
      restrict: 'E',
      templateUrl: 'colour-lovers.jade',
      replace: true,
      link: function () {
      },
      controller: ['$scope', '$http', ColourLoversCtrl]
    };
  }

  function ColourLoversCtrl($scope, $http) {
    $scope.paletteId = '';
    $scope.placeholder = '3148032 or http://www.colourlovers.com/palette/3148032/The_Sky_Opens_Up';

    $scope.isValidPalette = function () {
      return check.webUrl($scope.paletteId) ||
        check.positiveNumber(+$scope.paletteId);
    };

    $scope.fetchPalette = function () {
      try {
        if (check.webUrl($scope.paletteId)) {
          $scope.paletteId = /palette\/\d+\//.exec($scope.paletteId)[0];
          $scope.paletteId = /\d+/.exec($scope.paletteId)[0];
        }
      } catch (err) {
        alertify.error('Could not parse palette ' + $scope.paletteId);
        return;
      }
      console.log('fetching pallette', $scope.paletteId);
      $scope.fetchingPalette = true;

      var url = 'http://www.colourlovers.com/api/palette/' + $scope.paletteId;
      var options = {
        url: url,
        params: {
          format: 'json',
          jsonCallback: 'JSON_CALLBACK'
        }
      };
      $http.jsonp(url, options)
      .success(function (data) {
        if (!data[0]) {
          alertify.error('Undefined palette returned for id ' + $scope.paletteId);
          return;
        }
        console.log('pallete', data[0]);
        check.verify.colors(data[0].colors);
        // target.setColors(data[0].colors);
        $scope.$emit('set-colors', data[0].colors);
      })
      .error(function (err) {
        alertify.error('Could not fetch palette ' + $scope.paletteId);
        console.error(err);
      })
      .finally(function () {
        $scope.fetchingPalette = false;
      });
    };
  }
}(angular));

(function colorPusher(angular) {
  var app = angular.module('color-pusher',
    ['color-pusher-widget', 'color-pusher.jade']);

  app.directive('colorPusher', colorPusherDirective);

  function colorPusherDirective() {
    return {
      restrict: 'E',
      templateUrl: 'color-pusher.jade',
      replace: true,
      link: function (scope, element, attrs) {
        if (attrs.selectors || attrs.colors) {
          scope.$broadcast('selectors-colors', attrs);
        }
      },
      controller: ['$scope', colorPusherCtrl]
    };
  }

  function colorPusherCtrl($scope) {
    $scope.showColorPusher = false;

    $scope.$on('apply-colors', function onApplyColor(event, colors) {
      check.verify.object(colors, 'expected colors to be an object ' +
        JSON.stringify(colors, null, 2));

      Object.keys(colors).forEach(function (selector) {
        var css = colors[selector];
        $(selector).css(css);
      });
    });
  }
}(angular));
