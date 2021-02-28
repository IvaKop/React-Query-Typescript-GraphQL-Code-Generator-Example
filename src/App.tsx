import { QueryClient, QueryClientProvider } from 'react-query'

import Posts from 'components/Posts'

// Create a React Query client
const queryClient = new QueryClient()

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Posts />
        </QueryClientProvider>
    )
}

export default App
