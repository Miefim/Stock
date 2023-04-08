import UiPage from '../UI/Page'
import UiPageHeader from '../UI/PageHeader'
import UiPageContent from '../UI/PageContent'
import Header from '../components/Header'
import Banner from '../components/Banner'

const HomePage: React.FC = () => {
   return(
      <UiPage>
         <UiPageHeader>
            <Header/>
         </UiPageHeader>
         <UiPageContent>
            <Banner/>
         </UiPageContent>
      </UiPage>
   )
}

export default HomePage