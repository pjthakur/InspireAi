import { Nav } from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/globals.css'
export const metadata ={
    title: 'InspireAi',
    description: 'Discover & Share AI Prompts'
}
const layout = ({children}) => {
  return (
    <html>
        <head>
            <link rel="shortcut icon" href="/assets/images/logo.png"/>
        </head>
        <body>
            <Provider>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default layout