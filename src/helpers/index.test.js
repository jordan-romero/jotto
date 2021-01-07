import { getLetterMatchCount } from './'

describe ('getLetterMatchCount', () => {
    const secretWord = 'party'
    test('returns the correct count when there are no matching letters', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord)
        expect(letterMatchCount).toBe(0)
    }); 
    test('returns the correct count when there are 3 matching letters', () => {

    })
    test('returns the correct count when there are duplicate letters in the guess' () => {

    })
})
