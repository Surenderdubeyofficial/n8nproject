import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
const ContactForm = () =>{
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                 <Button text = "VIA SUPPORT CHAT"icon = {<MdMessage fontSize="24px" />} />
                <Button text = "VIA Call" icon = {<IoCallOutline fontSize="24px" />} />
                <Button text = "VIA Email" icon = {<IoMailOutline fontSize="24px" />} IsOutline ="true" />
            </div>
            <form>
                <div className={styles.form_control}>
                    <label>Name</label>
                    <input type="text" name="name"/>
                </div>
                <div className={styles.form_control}>
                    <label>E-mail</label>
                    <input type="text" name="email"/>
                </div>
                <div className={styles.form_control}>
                    <label>TEXT</label>
                    <textarea type="text" name="text" rows="8"/>
                </div>
                <div style ={{display:"flex",
                justifyContent:"end"}}>
                <button type="text">SUBMIT BUTTON</button></div>
            </form>
            </div>
            <div className={styles.contact_img}>
                img src="../images/contactusimg.png" alt="contactusimage"/ >  
            </div>
        </section>
    )




}


export default ContactForm;

