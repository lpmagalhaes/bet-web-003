import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FilledInput from '@mui/material/FilledInput';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Label,
	ResponsiveContainer
} from "recharts";

function App() {
	const [category, setCategory] = React.useState(0);
	const [sortBy, setSortBy] = React.useState(0);
	const [showResolved, setShowResolved] = React.useState(false);
	const [showFavorites, setShowFavorites] = React.useState(false);

	const [showDetails, setShowDetails] = React.useState(false);
	const [yesOrNo, setYesOrNo] = React.useState(true);

	const title = "What will the floor price of Bored Apes be on January 14, 2022?"
	const image = 'https://miro.medium.com/max/1200/1*qGqMY0LcqT1xgdz0z9r8EA.png'

	function createData(time, amount) {
		return { time, amount };
	}

	const data = [
		createData("00:00", 0),
		createData("03:00", 300),
		createData("06:00", 600),
		createData("09:00", 800),
		createData("12:00", 1500),
		createData("15:00", 2000),
		createData("18:00", 2400),
		createData("21:00", 2400),
		createData("24:00", undefined)
	];

	return <Box sx={{ flexGrow: 1 }}>
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					BetCrypto
				</Typography>
				<Button color="inherit">Connect Wallet</Button>
			</Toolbar>
		</AppBar>
		<Container maxWidth="lg" sx={{bgcolor: '#fcfcfc', pb: 10}}>
			{
				!showDetails && <>
					<Box sx={{
						mt: 2,		
						bgcolor: 'primary.main',
						borderRadius: '20px',
						p: 2,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}>
						<Box component='h1' sx={{
							mt: 8,
							color: 'primary.contrastText',
						}}>
							Bet on your Beliefs
						</Box>
						<Box sx={{
							maxWidth: '800px',
							color: 'primary.contrastText',
							textAlign: 'center',
							mb: 8,
						}}>
							BetCrypto is a decentralized information markets platform, harnessing the power of free markets to demystify the real world events that matter most to you.
						</Box>
					</Box>
					<FormControl fullWidth sx={{ mt: 2 }} variant="filled">
						<InputLabel>Search Market...</InputLabel>
						<FilledInput
							startAdornment={<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>}
						/>
					</FormControl>
					<Grid container spacing={2} sx={{mt: 2}}>
						<Grid item xs={12} md={3} >
							<FormControl variant="standard" fullWidth>
								<InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
								<Select 
									value={category} 
									onChange={(event) => setCategory(event.target.value)}>
									<MenuItem value={0}>
										<em>All</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={3} >
							<FormControl variant="standard" fullWidth>
								<InputLabel>Sort By</InputLabel>
								<Select 
									value={sortBy}
									onChange={(event) => setSortBy(event.target.value)}>
									<MenuItem value={0}>
										<em>Volume</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={6} sx={{
							display: 'flex',
							alignItems: 'center',
						}}>
							<Box sx={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}} >
								<Box sx={{
									display: 'flex',
									alignItems: 'center',
									cursor: 'pointer',
								}}
									onClick={() => setShowResolved(!showResolved)}>
									{ 
										!showResolved 
											? <CheckBoxOutlineBlankIcon /> 
											: <CheckBoxIcon />
									}
									<Box sx={{ml: 1}}>
										Show Resolved
									</Box>
								</Box>
								<Box sx={{
									ml: 1,
									display: 'flex',
									alignItems: 'center',
									cursor: 'pointer',
								}}
									onClick={() => setShowFavorites(!showFavorites)}>
									{ 
										!showFavorites
											? <StarBorderIcon /> 
											: <StarIcon />
									}
									<Box sx={{ml: 1}}>
										Show Favorites
									</Box>
								</Box>
							</Box>
						</Grid>
						{
							Array.from(new Array(14)).map(item => {

								return <Grid item xs={12} md={4} sx={{
									cursor: 'pointer',
								}}
									onClick={() => setShowDetails(true)}>
									<Paper elevation={1} sx={{p: 2}}>
										<Box sx={{
											display: 'flex',
											flexDirection: 'row',
										}}>
											<Avatar src={image} />
											<Typography>
												{title}
											</Typography>
										</Box>
										<Box sx={{
											mt: 2,
											display: 'flex',
											flexDirection: 'row',
											fontSize: '12px',
										}}>
											<Box sx={{
												display: 'flex',
												flexDirection: 'column',
											}}>
												<span>Volume</span>
												<p>$48,547</p>
											</Box>

											<Box sx={{
												ml: 4,
												display: 'flex',
												flexDirection: 'column',
											}}>
												<span>Yes</span>
												<Box sx={{p: 1, bgcolor: '#f2f2f2', color: '#1652f0'}}>$0.70</Box>
											</Box>

											<Box sx={{
												ml: 4,
												display: 'flex',
												flexDirection: 'column',
											}}>
												<span>No</span>
												<Box sx={{p: 1, bgcolor: '#f2f2f2', color: '#1652f0'}}>$0.30</Box>
											</Box>
											<Box sx={{flexGrow: 1}}></Box>
											<StarBorderIcon sx={{mt: 4}} />
										</Box>
									</Paper>
								</Grid>
							})
						}
					</Grid>
				</>
			}
			{
				showDetails && <>
					<Paper elevation={1} sx={{p: 2, mt: 2,}}>
						<Grid container spacing={2}>
							<Grid item xs={12} md={6}>
								<Box sx={{
									display: 'flex',
									flexDirection: 'row',
								}}>
									<Avatar src={image} />
									<Typography sx={{ml: 1, fontSize: '24px',}}>
										{title}
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={12} md={6}>
								<Box sx={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
									height: 1
								}}>
									<Box sx={{
										p: 1, 
										bgcolor: '#f2f2f2', 
										display: 'flex',
										flexDirection:' column',
										width: 1,
										mr: 1,
									}}>
										<Box sx={{
											color: 'rgba(0,0,0,.5)',
											fontSize: '.75rem',
										}}>
											Markets ends on
										</Box>
										November 8, 2022	
									</Box>

									<Box sx={{
										p: 1, 
										bgcolor: '#f2f2f2', 
										display: 'flex',
										flexDirection:' column',
										width: 1,
										mr: 1,
									}}>
										<Box sx={{
											color: 'rgba(0,0,0,.5)',
											fontSize: '.75rem',
										}}>
											Trade volume
										</Box>
										$452
									</Box>

									<Box sx={{
										p: 1, 
										bgcolor: '#f2f2f2', 
										display: 'flex',
										flexDirection:' column',
										width: 1,
									}}>
										<Box sx={{
											color: 'rgba(0,0,0,.5)',
											fontSize: '.75rem',
										}}>
											Liquidity
										</Box>
										$2,434
									</Box>
								</Box>
							</Grid>

						</Grid>
					</Paper>

					<Grid container spacing={2}>
						<Grid item xs={12} md={8}>
							<Paper elevation={1} sx={{p: 2, mt: 2,height: '300px'}}>
								<ResponsiveContainer>
									<LineChart
										data={data}
										margin={{
											top: 16,
											right: 16,
											bottom: 0,
											left: 24
										}}
									>
										<XAxis dataKey="time" stroke={'green'} />
										<YAxis stroke={'black'}>
											<Label
												angle={270}
												position="left"
												style={{ textAnchor: "middle", fill: 'red' }}
											>
												Sales ($)
											</Label>
										</YAxis>
										<Line
											type="monotone"
											dataKey="amount"
											stroke={'blue'}
											dot={false}
										/>
									</LineChart>
								</ResponsiveContainer>
							</Paper>
							<Box sx={{
								mt: 2,
								display: 'flex',
								flexDirection: 'column',
							}}>
								<Typography align='center' fontWeight='700'>
									Market Positions
								</Typography>
								<hr style={{width: '90%', color: '#DDDDDD', }}/>
								<Table sx={{width: 1}}>
									<TableHead>
										<TableRow>
											<TableCell> Outcome </TableCell>
											<TableCell> PRice: Avg | Cur. </TableCell>
											<TableCell> P/L: $ | % </TableCell>
											<TableCell> Value: Init Z| Cur </TableCell>
											<TableCell> Max Payout </TableCell>
										</TableRow>
									</TableHead>
								</Table>
								<Typography sx={{mt: 2}}>
									No Market Positions
								</Typography>
								<Typography fontWeight='700' sx={{mt: 2}}>
									About this market
								</Typography>
								<Typography sx={{mt: 2}}>
									The 2022 United States Senate elections will be held on November 8, 2022, with 34 of the 100 seats in the Senate being contested.
								</Typography>
								<Typography sx={{mt: 2}}>
									This market will resolve to the party which is affiliated with more than half of the voting Senate members after the 2022 Senate elections, or if the Vice President has the same party affiliation, half or more of the voting Senate members. A Senator's party affiliation is determined by whichever party???s caucus he or she is a member of; namely at the time of the writing of this question, Bernie Sanders and Angus King are considered to be affiliated with the Democratic Party.
								</Typography>

								<Typography sx={{mt: 2}}>
									Determination of which party controls the Senate after the 2022 U.S. Senate elections will be based on a consensus of credible reporting, or if there is ambiguity, final state election authority certification or other final official determination of the 2022 election results.
								</Typography>
								<Box sx={{
									mt: 2,
									bgcolor: '#f4f4f4',
									borderRadius: '.8rem',
									color: '#aaa',
									p: '8px 16px',
									width: 'fit-content',
								}}>
									Resolver: Ciclano <a href='#'>View Contract</a>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={4}>
							<Paper elevation={1} sx={{p: 2, mt: 2,}}>
								<Box sx={{
									display: 'flex',
									flexDirection: 'column',
								}}>
									<Typography align='center' fontWeight='700'>
										Buy
									</Typography>
									<hr style={{width: '90%', color: '#DDDDDD', }}/>
									<Box 
										onClick={() => setYesOrNo(!yesOrNo)}
										sx={{
											mt: 1,
											p: 1, 
											bgcolor: yesOrNo ? '#05b16a' : '#f2f2f2', 
											color: yesOrNo ? '#FFFFFF' : '', 
											cursor: 'pointer',
											display: 'flex',
											flexDirection: 'row',
										}}>
										Yes 
										<Box sx={{
											ml: 1,
											color: yesOrNo ? '#FFFFFF' : 'rgba(0,0,0,.5)', 
										}}>
											$0.31
										</Box>
									</Box>
									<Box 
										onClick={() => setYesOrNo(!yesOrNo)}
										sx={{
											mt: 1,
											p: 1, 
											bgcolor: !yesOrNo ? '#05b16a' : '#f2f2f2', 
											color: !yesOrNo ? '#FFFFFF' : '', 
											cursor: 'pointer',
											display: 'flex',
											flexDirection: 'row',
										}}>
										No 
										<Box sx={{
											ml: 1,
											color: !yesOrNo ? '#FFFFFF' : 'rgba(0,0,0,.5)', 
										}}>
											$0.69
										</Box>
									</Box>
									<Typography sx={{mt: 1}}>
										BUSD Amount
									</Typography>
									<TextField
										sx={{mt: 1}}
										label="Amount"
										InputProps={{
											startAdornment: <InputAdornment position="start">$</InputAdornment>,
										}}
									/>
									<Box sx={{
										mt: 1,
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
									}}>
										<Typography sx={{color: '#979797'}}>
											LP Fee
										</Typography>
										<Typography sx={{color: '#979797'}}>
											1.80%
										</Typography>
									</Box>
									<Box sx={{
										mt: 1,
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
									}}>
										<Typography>
											You Avg. Price
										</Typography>
										<Typography>
											$0.00
										</Typography>
									</Box>
									<Box sx={{
										mt: 1,
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
									}}>
										<Typography>
											Estimed Shares Bought
										</Typography>
										<Typography>
											0.00
										</Typography>
									</Box>
									<Box sx={{
										mt: 1,
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
									}}>
										<Typography>
											Maximum Winnings
										</Typography>
										<Typography>
											$0.00
										</Typography>
									</Box>
									<Box sx={{
										mt: 1,
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
									}}>
										<Typography>
											Max Return on investment
										</Typography>
										<Typography>
											0.00%
										</Typography>
									</Box>
									<Button
										sx={{
											mt: 1,
											width: 1,
											textTransform: 'none',
											bgcolor: 'rgb(22, 82, 240)',
											color: '#FFFFFF',
											fontWeight: 400,
											fontSize: '16px',
										}}>
										Buy
									</Button>

								</Box>
							</Paper>
						</Grid>
					</Grid>

				</>
			}
		</Container>
	</Box>
}

export default App;
