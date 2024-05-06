import FinancialChart from '../components/FinancialChart'
import { useSession } from 'next-auth/react';


function DashboardPage() {

  return <>
    <div>Dashboard</div>
    <FinancialChart/>
  </>;
}

export default DashboardPage;
