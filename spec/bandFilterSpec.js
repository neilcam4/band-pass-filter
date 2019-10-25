describe('BAND FILTER', function(){
    it('should return an empty array if input is empty', function(){
        let input = []
        let result = bandFilter(input)
        expect(result).toEqual([])
    })
    it('should return an empty array which is inside the limits', function(){
        let input = []
        let lowerLimit = 3
        let upperLimit = 7
        let result = bandFilter(input)
        expect(result).toEqual([])
    })
    it('should retun an array which is inside the limits', function(){
        let input = [4, 5, 6]
        let lowerLimit = 3
        let upperLimit = 7
        let result = bandFilter(input, lowerLimit, upperLimit)
        expect(result).toEqual([4,5,6])
    })
    it('should return an array same length as inputs but with amended lower limit', function(){
        let input = [ 4, 5, 6]
        let lowerLimit = 3
        let upperLimit = 7
        let result = bandFilter(input, lowerLimit, upperLimit)
        expect(result).toEqual([4,5,6])
    })
    it('should return an array same length as inputs but with amended lower limit', function(){
        let input = [ 2, 4, 5, 6]
        let lowerLimit = 3
        let upperLimit = 7
        let result = bandFilter(input, lowerLimit, upperLimit)
        expect(result).toEqual([3,4,5,6,])
    })
    it('should return an array same length as inputs but with amended numbers above the upper limit', function(){
        let input = [ 4, 4, 5, 9]
        let lowerLimit = 3
        let upperLimit = 7
        let result = bandFilter(input, lowerLimit, upperLimit)
        expect(result).toEqual([4,4,5,7])
    })
})