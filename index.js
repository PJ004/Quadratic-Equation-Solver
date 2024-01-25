// **********************************************************************************//
// Quadratic Equation Calculator:                                                    //
//                                                                                   //
// A Simple Javascript Program that calculates the solution for a quadratic equation //
// **********************************************************************************//



// The discriminant D is the part that is inside the square root of the quadratic formula
// If the discriminant D is positive the equation has a solution and vice versa
function discriminant(A, B, C) {
    return (Math.pow(B, 2) - (4*A*C))
}


// Returns true if the value is a number
function isNumber(value) {
    if (isNaN(value)) {
        return false
    }
    return true
}

// Returns the solutions of the equation in the form of an array
function quadratic(A, B, C) {
    
    let D = discriminant(A, B, C)

    // Early return in case D is positive
    if (D >= 0) { 
        ans1 = ( -B + ( Math.sqrt(D) ))/(2*A)
        ans2 = ( -B - ( Math.sqrt(D) ))/(2*A)
        return Array(ans1, ans2, true)
    }

    // This case is only used if D is negative i.e. less than 0
    ans1 = (-B/(2*A)) + '+' + '('+ ((Math.sqrt(Math.abs(D)))/(2*A)) + 'i' + ')'
    ans2 = (-B/(2*A)) + '-' + '('+ ((Math.sqrt(Math.abs(D)))/(2*A)) + 'i' + ')'
    return Array(ans1, ans2, false)
}

function main() {
    let A = document.getElementById('TermA').value
    let B = document.getElementById('TermB').value
    let C = document.getElementById('TermC').value

    A = Number(A)
    B = Number(B)
    C = Number(C)

    if (isNumber(A) && isNumber(B) && isNumber(C)) {

        let ansArr = quadratic(A, B, C)
        document.getElementById('roots').innerHTML = '<br><br> Root 1: ' +  ansArr[0] + '<br> Root 2: ' + ansArr[1]

        if (!ansArr[2]) {
            document.getElementById('Uh oh').innerHTML = '<br> The roots appear to be complex!' // A warning for complex roots
        } else {
            document.getElementById('Uh oh').innerHTML = ''
        }

    } else {
        window.alert("Please enter a valid number!")    // Window alert if user enters a non-numeric value
    }
}

document.getElementById('Submit').onclick = main