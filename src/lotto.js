const btnRef = document.querySelector('#playBtn');
const ballRefs = document.querySelectorAll('.ball');
const resultsRef = document.querySelector('.results');
const isEmpty = (value) => value === '';
const isNotDigit = (value) => isNaN(parseInt(value));
const isNotInRange = (digit) => 1 > digit || digit > 49;

const isNotRedundant = (digits) => {
    digits.forEach((digit, idx, arr) => {
        if (arr.includes(digit, idx + 1)) {
            ballRefs[idx].classList.remove('error');
        }
    })
    return Array.from(ballRefs)
        .every((inputRef) => !inputRef.classList.contains('error'));
}

const getValues = (inputElements) => [...inputElements].map((input) => input.value);
const convertToDigits = (values) => values.map((value) => parseInt(values));

const validate = (validator, values) => {
    values.forEach((value, idx) => {
        if (validator(value)){
            ballRefs[idx].classList.add('error');

        }
    })
    //tworzenie tablicy, alternatywnie do spread operatora
    return Array.from(ballRefs).every((inputRef) => !inputRef.classList.contains('error'));
}

const drawDigits = () => {
    const results = [];
    while (results.length <= 6) {
        const digit = Math.floor(Math.random() * 48 + 1);
        if (!results.includes(digit)) {
            results.push(digit);
        }
    }
    return results;

}

const checkDigits = (userDigits, drawnDigits) => {
    const hits = [];

    for (const userDigit of userDigits) {
        if (drawnDigits.includes(userDigit)){
            hits.push(userDigit);
        }
    }
    return hits;

}

const showResults = (results, drawnDigits) => {
    let message = `Trafiłeś: ${results.length}. Twoje liczby to ${results.join(', ')}`;
    resultsRef.innerText = message;

}

btnRef.addEventListener('click', () => {
    const values = getValues(ballRefs);

    const isNotEmpty = validate(isEmpty, values);
    const isDigits = validate(isNotDigit, values);

    if (isNotEmpty && isDigits) {
        const digits = convertToDigits(values);
        if (validate(isNotInRange, digits)) {
            if (isNotRedundant(digits)) {
                const drawnDigits = drawDigits();
                const hits = checkDigits(digits, drawnDigits);
                showResults(hits, drawnDigits)
            }
        }
    }
})