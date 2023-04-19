import { useState, useEffect } from 'react';
import Md from './component/Md';
import { Layout } from './Layout';
import { NextUIProvider, createTheme, getDocumentTheme } from '@nextui-org/react';
const lightTheme = createTheme({
    type: 'light',
    theme: {
        colors: {
            pureColor:"#000000",
        }, // optional
    }
})

const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {
            pureColor:"#FFFFFF",
        }, // optional
    }
})

function App() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // you can use any storage
        let theme = window.localStorage.getItem('data-theme');
        setIsDark(theme === 'dark');

        const observer = new MutationObserver((mutation) => {
            let newTheme = getDocumentTheme(document?.documentElement);
            setIsDark(newTheme === 'dark');
        });

        // Observe the document theme changes
        observer.observe(document?.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme', 'style']
        });

        return () => observer.disconnect();
    }, []);
    return (
        <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
            <Layout></Layout>
        </NextUIProvider>
    )
}

export default App
