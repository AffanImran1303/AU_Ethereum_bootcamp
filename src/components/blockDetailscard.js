// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Stack from 'react-bootstrap/Stack'
import Box from '@mui/joy/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Utils } from 'alchemy-sdk';
import initialBlockDetails from './initialBlockDetails';
import { Typography } from '@mui/material';

function generateBlockDetails(currentBlockDetails){
    console.log("Current Block Details:",currentBlockDetails);
    return(
        <>
        <div style={{backgroundColor:'black',color:'white', padding:'10px'}}>
        <h1>Genix BlockExplorer</h1>
        </div>
        <Box display="flex" alignItems="center" justifyContent="center">
        <Card sx={{width:'auto'}} style={{backgroundColor:"transparent"}}>
            <CardContent>
                <Typography color="white" variant="h3">Block: #{currentBlockDetails===undefined?initialBlockDetails.number:currentBlockDetails.number}</Typography>
            </CardContent>
        </Card>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
        <Card sx={{width:'auto'}}>
            <CardContent variant="solid">
                {/* <Box display="flex" alignItems="center" justifyContent="center"> */}
                <Typography level='title-md'><b>Block Height:</b>{currentBlockDetails===undefined?initialBlockDetails.number:currentBlockDetails.number}</Typography>
                <Typography level='title-md'><b>Status:</b>Unfinalized</Typography>
                <Typography level='title-md'><b>TimeStamp:</b>{currentBlockDetails===undefined?initialBlockDetails.timestamp:new Date(currentBlockDetails.timestamp*1000).toUTCString()}</Typography>
                <Typography><b>Transactions:</b>{currentBlockDetails===undefined?initialBlockDetails.transactions.length:currentBlockDetails.transactions.length}transactions</Typography>
                <Typography><b>Total Difficulty:</b>{currentBlockDetails===undefined?initialBlockDetails._difficulty._hex:currentBlockDetails._difficulty._hex.toString(16)}</Typography>
                <Typography><b>Gas Used:</b>{currentBlockDetails===undefined?initialBlockDetails.gasUsed._hex:parseInt(currentBlockDetails.gasUsed._hex)}</Typography>
                <Typography><b>Gas Limit:</b>{currentBlockDetails===undefined?initialBlockDetails.gasLimit._hex:parseInt(currentBlockDetails.gasLimit._hex)}</Typography>
                <Typography><b>Base Fee Per Gas:</b>{currentBlockDetails===undefined?initialBlockDetails.baseFeePerGas._hex:Utils.formatUnits(parseInt(currentBlockDetails.baseFeePerGas._hex),"ether")+"ETH("+Utils.formatUnits(parseInt(currentBlockDetails.baseFeePerGas._hex),"gwei")+"Gwei)"}</Typography>
                <Typography><b>Extra Data:</b>{currentBlockDetails===undefined?initialBlockDetails.extraData:currentBlockDetails.extraData}</Typography>
                <Typography><b>Validator:</b>{currentBlockDetails===undefined?initialBlockDetails.miner:currentBlockDetails.miner}</Typography>
                <Typography><b>Hash:</b>{currentBlockDetails===undefined?initialBlockDetails.hash:currentBlockDetails.hash}</Typography>
                <Typography><b>Parent Hash:</b>{currentBlockDetails===undefined?initialBlockDetails.parentHash:currentBlockDetails.parentHash}</Typography>
                <Typography><b>Nonce:</b>{currentBlockDetails===undefined?initialBlockDetails.nonce:currentBlockDetails.nonce}</Typography>
            </CardContent>
        </Card>
        </Box>
        </>
    )
}
export default generateBlockDetails;