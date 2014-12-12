Elm.Native.ListProc = {};

Elm.Native.ListProc.make = function(elm) {
    elm.Native = elm.Native || {};
    elm.Native.ListProc = elm.Native.ListProc || {};
    if (elm.Native.ListProc.values) return elm.Native.ListProc.values;

    var Utils = Elm.Native.Utils.make(elm);

    function log (x) {
        console.log(x);
        return x;
    }

    function takeWhileString(p, l) {
      for(var i = 0; i < l.length; i++) {
        if(!p(Utils.chr(l[i]))) {
          return l.slice(0,i);
        }
      }
      return l;
    }

    return elm.Native.ListProc.values = {
        log: log,
        takeWhileString: F2(takeWhileString)
    };
};
