import {
    Box,
    Card,
    CardContent,
    Typography,
    CircularProgress,
} from '@mui/material';
import { useTokenNews } from '../lib/hooks';
import { palette } from '../styles/theme/palette';

interface TokenNewsListProps {
    symbol: string;
}

const TokenNewsList = ({ symbol }: TokenNewsListProps) => {
    const { data: news, isLoading, isError } = useTokenNews(symbol);

    if (isLoading)
        return (
            <Box display="flex" justifyContent="center" p={2}>
                <CircularProgress />
            </Box>
        );

    if (isError)
        return (
            <Typography color="error" p={2}>
                Failed to load news.
            </Typography>
        );

    if (!news || news.length === 0)
        return <Typography p={2}>No news found for this token.</Typography>;

    return (
        <Box display="flex" flexDirection="column" gap={2} width="100%">
            {news.map((article: any) => (
                <Card
                    key={article.url}
                    variant="outlined"
                    sx={{
                        borderRadius: 2,
                        transition: 'background-color 0.2s',
                        cursor: 'pointer',
                        backgroundColor: '#1B142B',
                        '&:hover': {
                            backgroundColor: '#2a203c',
                        },
                    }}
                    onClick={() =>
                        window.open(
                            article.url,
                            '_blank',
                            'noopener,noreferrer'
                        )
                    }
                >
                    <CardContent>
                        <Typography
                            variant="h6"
                            sx={{
                                color: palette.secondary,
                                fontWeight: 'bold',
                                textDecoration: 'none',
                            }}
                        >
                            {article.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="#CCCCCC"
                            gutterBottom
                        >
                            {article.source?.name} —{' '}
                            {new Date(article.publishedAt).toLocaleString()}
                        </Typography>
                        <Typography variant="body2" color="#FFFFFF">
                            {article.description?.length > 150
                                ? `${article.description.slice(0, 150)}...`
                                : article.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default TokenNewsList;
