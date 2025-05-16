import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import BookingBody from "./Components/BookingBody";
import Contacts from "./Components/Contacts";
import DashboardBody from "./Components/DashboardBody";
import RecentBookings from "./Components/RecentBookings";
// import CommonPage from "./pages/CommonPage";
// import NavBar from "./pages/NavBar";
import Login from "./Components/Login";
import Register from "./Components/SignUp";
import BookingCalendar from "./Components/BookingCalender";



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        {/* <CommonPage></CommonPage> */}
        {/* <NavBar></NavBar> */}
        <Routes>
          <Route exact path="/" element={<DashboardBody />} />
          <Route exact path="/hallbooking" element={<BookingBody />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/recentBookings" element={<RecentBookings />} />
          <Route exact path="/bookingCalender" element={<BookingCalendar />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
