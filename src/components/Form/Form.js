import {useState,  Component} from "react";
import {useInput} from '../../utils/hooks'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            net: null,
            discount: 0,
            gross: null,
        };
    }

    handleSubmit = (e) => {
        const {netAmount, discount} = this.state;
        e.preventDefault();
        const TAX = 0.08;
        const amountAfterDiscount = netAmount - netAmount * discount / 100;
        const gross = amountAfterDiscount * TAX + amountAfterDiscount;
        this.setState({
            gross
        });
    }

    handleChange = (e) => {
        const value = e.target.value;
        const keyName = e.target.name;
        this.setState({
            [keyName]: value
        })

    }

    render() {
        const { net, discount, gross } = this.state;

        if(gross) {
            return <div>{ gross }</div>;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Restaurant bill calculator</h2>
                <div>
                    <label htmlFor="net">Net amount</label>
                    <input id="net" name="netAmount" type="number" value={net} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="discount">Discount: </label>
                    <select id="discount" name="discount" value={discount} onChange={this.handleChange}>
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
        )
    }
}

// function Form() {
//     const [gross, setGross] = useState(null);
//     const [netAmount, handleNetAmountChange] = useInput("")
//     const [discount, handleDiscountChange] = useInput(0);
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const TAX = 0.08;
//         const amountAfterDiscount = netAmount - netAmount * discount / 100;
//         const grossAmount = amountAfterDiscount * TAX + amountAfterDiscount;
//         setGross(grossAmount);
//     }
//
//     if (gross) {
//         return <div>{gross}</div>;
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Restaurant bill calculator</h2>
//             <div>
//                 <label htmlFor="net">Net amount</label>
//                 <input id="net" name="netAmount" type="number" onChange={handleNetAmountChange}/>
//             </div>
//             <div>
//                 <label htmlFor="discount">Discount: </label>
//                 <select id="discount" name="discount" defaultValue={0} onChange={handleDiscountChange}>
//                     <option value={0} disabled>Choose...</option>
//                     <option value={5}>5%</option>
//                     <option value={10}>10%</option>
//                     <option value={15}>15%</option>
//                     <option value={20}>20%</option>
//                 </select>
//             </div>
//             <div>
//                 <button type="submit">Przelicz</button>
//             </div>
//         </form>
//     );
// }

export default Form;
