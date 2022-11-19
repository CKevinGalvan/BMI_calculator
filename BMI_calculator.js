function bmiCalculator (weight, height) 
{
    var interpretation = "";
    var bmi = Math.floor((weight)/(height*height));
    console.log(bmi);
    if(bmi<18.5)
    {
        interpretation = "Your BMI is "+bmi+", so you are underweight.";
    }
    else if(bmi>18.5 && bmi<=24.9)
    {
        interpretation = "Your BMI is "+bmi+", so you have a normal weight";
    }
    else if(bmi>24.9 && bmi<=29.9)
    {
        interpretation = "Your BMI is "+bmi+", so you are overweight.";
    }
    else if(bmi>30 && bmi<=34.9)
    {
        interpretation = "Your BMI is "+bmi+", so you are obese.";
    }
    else if(bmi>35)
    {
        interpretation = "Your BMI is "+bmi+", so you are extremely obese.";
    }
    return interpretation;
}
