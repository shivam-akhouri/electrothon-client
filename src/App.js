import React, { Component } from "react";
// import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Form from "./components/Form/Form";
import Register from "./components/Register/Register";
import SignIn from "./components/SignIn/Signin";
import SignUp from "./components/SignUp/SignUp";
import HomePage from "./components/HomePage/HomePage";
import ManReg from "./components/Form/ManReg";
import SupReg from "./components/Form/SupReg";
import MedReg from "./components/Form/Medicine";
import Qr from "./components/QR/Qr"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css"

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      // const networkId = await web3.eth.net.getId();
      // const deployedNetwork = SimpleStorageContract.networks[networkId];
      // const instance = new web3.eth.Contract(
      //   SimpleStorageContract.abi,
      //   deployedNetwork && deployedNetwork.address,
      // );

      // // Set web3, accounts, and contract to the state, and then proceed with an
      // // example of interacting with the contract's methods.
      // this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="SupReg" element={<SupReg/>}/> 
      <Route path="/ManReg/MedReg" element={<MedReg/> }/>
      <Route path="SignUp" element={<SignUp />} />
      <Route path="ManReg" element={<ManReg />} />
      <Route path="Register" element={<Register />} />
      <Route path="SignIn" element={<SignIn/>} />
      <Route path="Qr"    element={<Qr/>}/>
      
    </Routes>
    

   
     
      
    </BrowserRouter>
    );
  }
}

export default App;
