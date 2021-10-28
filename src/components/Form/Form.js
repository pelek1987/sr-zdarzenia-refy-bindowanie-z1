import {useState} from "react";
import {useInput} from '../../utils/hooks'

function Form() {
    const [gross, setGross] = useState(null);
    const [netAmount, handleNetAmountChange] = useInput("")
    const [discount, handleDiscountChange] = useInput(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        const TAX = 0.08;
        const amountAfterDiscount = netAmount - netAmount * discount / 100;
        const grossAmount = amountAfterDiscount * TAX + amountAfterDiscount;
        setGross(grossAmount);
    }

    if (gross) {
        return <div>{gross}</div>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Restaurant bill calculator</h2>
            <div>
                <label htmlFor="net">Net amount</label>
                <input id="net" name="netAmount" type="number" onChange={handleNetAmountChange}/>
            </div>
            <div>
                <label htmlFor="discount">Discount: </label>
                <select id="discount" name="discount" defaultValue={0} onChange={handleDiscountChange}>
                    <option value={0} disabled>Choose...</option>
                    <option value={5}>5%</option>
                    <option value={10}>10%</option>
                    <option value={15}>15%</option>
                    <option value={20}>20%</option>
                </select>
            </div>
            <div>
                <button type="submit">Przelicz</button>
            </div>
        </form>
    );
}

export default Form;
