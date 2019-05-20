function diagonalDifference(arr) {
    let priDiagnol =0
    let secDiagnol = 0
    let j = arr.length-1
    for (let i in arr)
    {
        priDiagnol += arr[i][i]
        secDiagnol += arr[i][j]
        j--
    }
   
    let sum = priDiagnol - secDiagnol
    return Math.abs(sum)
}