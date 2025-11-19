import { Box, CircularProgress, Typography } from '@mui/material';
import { useMemo } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { HistoricalPriceInterval } from 'alchemy-sdk';
import { useTokenTableContent } from '../lib/hooks';
import { topEthereumTokens } from '../types';
import tokenIcon from '../assets/icons/token-icon.svg';
import { getTimeRange } from '../utils';

const TokenTable = () => {
    const { startDate, endDate } = useMemo(() => getTimeRange(7), []);

    const symbols = useMemo(() => topEthereumTokens.map((t) => t.symbol), []);

    const getTokenTableContentPayload = useMemo(
        () => ({
            symbols,
            startDate,
            endDate,
            interval: HistoricalPriceInterval.ONE_DAY,
        }),
        [symbols, startDate, endDate]
    );

    const { data: tableContent, isLoading: isTableContentLoading } =
        useTokenTableContent(getTokenTableContentPayload);

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Token Name',
            width: 250,
            renderCell: (params: any) => (
                <Box display="flex" alignItems="center" gap={1} height="100%">
                    <img
                        src={params.row.logo || tokenIcon}
                        alt={params.row.symbol}
                        width={24}
                        height={24}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {params.value}
                    </Typography>
                </Box>
            ),
        },
        { field: 'symbol', headerName: 'Symbol', width: 100 },
        { field: 'price', headerName: 'Price ($)', width: 150, type: 'number' },
        {
            field: 'change24h',
            headerName: '24h %',
            width: 120,
            type: 'number',
            renderCell: (params: any) => {
                const val = params.row.change24h;
                if (typeof val !== 'number') return '-';
                return (
                    <Typography
                        sx={{
                            display: 'inline-block',
                            color:
                                val > 0
                                    ? 'success.main'
                                    : val < 0
                                      ? 'error.main'
                                      : 'text.primary',
                        }}
                    >
                        {val > 0 ? `+${val.toFixed(2)}%` : `${val.toFixed(2)}%`}
                    </Typography>
                );
            },
        },
        {
            field: 'change7d',
            headerName: '7d %',
            width: 120,
            type: 'number',
            renderCell: (params: any) => {
                const val = params.row.change7d;
                if (typeof val !== 'number') return '-';
                return (
                    <Typography
                        sx={{
                            display: 'inline-block',
                            color:
                                val > 0
                                    ? 'success.main'
                                    : val < 0
                                      ? 'error.main'
                                      : 'text.primary',
                        }}
                    >
                        {val > 0 ? `+${val.toFixed(2)}%` : `${val.toFixed(2)}%`}
                    </Typography>
                );
            },
        },
        {
            field: 'ath',
            headerName: '20d ATH',
            width: 120,
            type: 'number',
            renderCell: (params: any) => {
                const val = params.row.ath;
                return typeof val === 'number' ? `$${val.toFixed(2)}` : '-';
            },
        },
        {
            field: 'atl',
            headerName: '20d ATL',
            width: 120,
            type: 'number',
            renderCell: (params: any) => {
                const val = params.row.atl;
                return typeof val === 'number' ? `$${val.toFixed(2)}` : '-';
            },
        },
    ];

    return (
        <Box
            height={400}
            minWidth={900}
            sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
            }}
        >
            {isTableContentLoading ? (
                <Box
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    gap={1}
                >
                    <CircularProgress />
                    <Typography>Loading tokens...</Typography>
                </Box>
            ) : (
                <DataGrid
                    sx={{
                        border: 'none',
                        borderRadius: 3,
                        '& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within':
                            {
                                outline: 'none',
                            },
                        '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within':
                            {
                                outline: 'none',
                            },
                    }}
                    rows={tableContent}
                    columns={columns}
                    hideFooter
                />
            )}
        </Box>
    );
};

export default TokenTable;
