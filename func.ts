const ACTION = /^\s*(\w+ ?\w*):\s+(.+)/;
const TEXT = /^\s*\[(-?\d+), (-?\d+)\]:\s+(.+)/;
const WINDOW_SIZE = /^\[(-?\d+), (-?\d+)\]$/;
const RECTANGLE = /^\[(-?\d+), (-?\d+), (-?\d+), (-?\d+)\]\s+(.+)$/;
const REPEAT = /^Image\s+\("(.+)"\)\s+\[(-?\d+), (-?\d+)\]\s+Size\s+\((-?\d+), (-?\d+)\)\s+(.+)$/;
const PATH = /^Path \((.+)\)$/;
const VECTOR = /^Vector\(x: (-?\d+), y: (-?\d+)\)$/;
const BEZIER_CURVE = /^BezierCurve\(x0: (-?\d+), y0: (-?\d+), x1: (-?\d+), y1: (-?\d+), cx0: (-?\d+), cy0: (-?\d+), cx1: (-?\d+), cy1: (-?\d+)\)$/;
const SHAPE = /^(rgba?\((:?.+)\)) (Path .+)$/;
const CIRCLE = /^(rgba?\((:?.+)\)) Circle\(x: (-?\d+), y: (-?\d+), r: (-?\d+)\)$/;
const IMAGE = /^Image\s+\("(.+)"\)\s+\(source:\s+\[(-?\d+), (-?\d+), (-?\d+), (-?\d+)\]\)\s+\(destination:\s+\[(-?\d+), (-?\d+), (-?\d+), (-?\d+)\]\)$/;
const CANVAS = /^(Canvas)\s+\(source:\s+\[(-?\d+), (-?\d+), (-?\d+), (-?\d+)\]\)\s+\(destination:\s+\[(-?\d+), (-?\d+), (-?\d+), (-?\d+)\]\)$/;
const GRADIENT = /^\[(-?\d+), (-?\d+), (-?\d+), (-?\d+)\]\s+linear-gradient\(x0: (-?\d+), x1: (-?\d+), y0: (-?\d+), y1: (-?\d+) (.+)\)$/;
const TRANSFORM = /^\((-?\d+), (-?\d+)\) \[(.+)\]$/;

function parsePath(path) {
    const parts = path.match(PATH)[1];
    return parts.split(' > ').map(p => {
        const vector = p.match(VECTOR);
        if (vector) {
            return {
                type: 'Vector',
                x: parseInt(vector[1], 10),
                y: parseInt(vector[2], 10)
            };
        } else {
            const bezier = p.match(BEZIER_CURVE);
            return {
                type: 'BezierCurve',
                x0: parseInt(bezier[1], 10),
                y0: parseInt(bezier[2], 10),
                x1: parseInt(bezier[3], 10),
                y1: parseInt(bezier[4], 10),
                cx0: parseInt(bezier[5], 10),
                cy0: parseInt(bezier[6], 10),
                cx1: parseInt(bezier[7], 10),
                cy1: parseInt(bezier[8], 10)
            };
        }
    });
}

function parseRefTest(txt) {
    return txt.split(/\n/g).filter(l => l.length > 0).map((l, i) => {
        const parseAction = l.match(ACTION);
        if (!parseAction) {
            const text = l.match(TEXT);
            return {
                action: 'T',
                x: parseInt(text[1], 10),
                y: parseInt(text[2], 10),
                text: text[3],
                line: i + 1
            };
        }
        const args = parseAction[2];

        const data = {
            action: parseAction[1],
            line: i + 1
        };

       

        return data;
    });
}

module.exports = parseRefTest;
