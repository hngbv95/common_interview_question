
const log = (text) => console.log(text)

console.log(typeof (typeof null))

function clone(org) {
    switch (typeof org) {
        case "object":
            if (org === null) {
                return null
            }
            
            if (org.length === undefined) {
                // object
                const rs = {};
                Object.keys(org).forEach(attr => {
                    rs[attr] = clone(org[attr])
                })

                return rs
            }

            // array
            const rs = []
            org.forEach((item) => {
                rs.push(clone(item))
            })

            return rs;
        case "string" | "number" | "Boolean" | "undefined":
        default:
            return org
    }
}

// {}
const engineer = {
    name: "Hung"
}

// []
const employees = ["Hung", "An"]

//  {[]} 
const company = {
    itDepartment: ["Hung", "An"]
}

// [{}]
const cities = [{name: "Hanoi"}, {name: "Saigon"}]

function test(name, input) {
    output = clone(input)
    const equalInValue = input.toString() === output.toString();
    const differInRef = input === output;
    const testRs = equalInValue && !differInRef
    log(input)
    log(output)
    log(name, testRs)
    log('--------------------------------')
}

(function(){
    test("Case 1 {}", engineer)
    test("Case 2 []", employees)
    test("Case 3 {[]}", company)
    test("Case 4 [{}]", cities)
})()