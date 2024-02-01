const CiarHeaderSection = () => {
    const [ ciarNumber, setCiarNumber] = useState(1015);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('/employees.json');
            const data = await response.json();
            setOptions(data);
        } catch (error) {
            console.error('Error fetching options:', error);
        }
        };

        fetchData();
    }, []);

    
}