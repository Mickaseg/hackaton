import './Identif.css'
import bande from '../Assets/photopeople.png';

const Identif = () => {
return <div className="main">

<div className="identifIntro">
  <h1>Did you find someone you wanna play with ?
    <p><span id="lightText">Don't hesitate any longer</span> and catch <span id="lightText">your target!</span></p>
  </h1>
</div>

  <div className="login-box"> 
  <div><h2 id="registrationTitle">Registration Form</h2></div>
<form>
    <div className="user-box">
      <input type="text" name="user_lastname" required="Hey Nasty, don't forget your lastname! " placeholder=""/>
      <label for="lastname">Last Name</label>
    </div>
    <div className="user-box">
      <input type="text" name="user_firstname" required="Hey Cutie, what's your firstname?" placeholder="" />
      <label for="firstname">First Name</label>
    </div>
    <div className="user-box">
      <input type="text" name="user_telephone" required="Hey Honey, you forgot to write your number :)" placeholder="" />
      <label for="telephone">Telephone</label>
    </div>
    <div className="user-box">
      <input type="email" name="user_email" required="Hey Honey, you forgot to write your email :)" placeholder="" />
    <label for="email">Email</label>
    </div>
    <div className="user-box"> 
      <input type="text" name="" required />
    <label>Give us the name of your favorite target !</label>
    </div>
    <a href="#"  > 
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
</form>
</div>
<img src={bande} alt="bande" className="form-bande" />

</div>
}

export default Identif;