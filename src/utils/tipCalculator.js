const tipAmountCalc = (bill, tip, numberOfPeople) => {
    const tipAmount = tip * bill / numberOfPeople;
    
    const formatted = Math.round(tipAmount * 100) / 100;

    return formatted.toFixed(2);
};

const totalCalc = (tipAmount, bill, numberOfPeople) => {
    const total = tipAmount + (bill / numberOfPeople);

    const formatted = Math.round(total * 100) / 100;

    return formatted.toFixed(2);
};

export const calculator = (bill, tip, numberOfPeople) => {
    
    const tipAmount = Number(tipAmountCalc(bill, tip, numberOfPeople));

    const total = Number(totalCalc(tipAmount, bill, numberOfPeople));

    return {
        tipAmount,
        total,
    };
};
