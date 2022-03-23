import classes from "./MySelect.module.css"

function MySelect({options, defaultValue, value, onChange, ...props}) {
    return (
        <select 
            className={classes.mySel} 
            value={value}
            onChange={(e) => onChange(e.target.value)} 
            {...props}
        >
            <option disabled value="">{defaultValue}</option>
            {
                options.map(option => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    );
                })
            }
        </select>
    );
}

export default MySelect;