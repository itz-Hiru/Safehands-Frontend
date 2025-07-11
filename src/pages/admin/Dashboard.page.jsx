import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext.context";
import DashboardLayout from "../../components/Layouts/DashboardLayout.component";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);

  const getTimeBasedGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) return "Good Morning!";
    if (currentHour >= 12 && currentHour < 17) return "Good Afternoon!";
    if (currentHour >= 17 && currentHour < 21) return "Good Evening!";
    return "Good Night!";
  };
  return (
    <DashboardLayout activeMenu="Dashboard">
      {dashboardData && <></>}
    </DashboardLayout>
  );
};

export default Dashboard;
