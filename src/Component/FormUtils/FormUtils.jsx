import {Typography, TextField, Button,Stack, CircularProgress} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";
import { useField } from 'formik';
export const Text = ({text}) => {
    return (
      <Typography sx={{fontSize:'12px',}}>{text}</Typography>
    )
  }

  const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "red",
      },
      
    },
    "& .MuiOutlinedInput-notchedOutline:hover": {
    },
  });
  
export const Field = ({type, multiline, maxRows, width, conWidth='300px', size='small', ...props}) => {
      const [field, meta] = useField(props)
   
      const classes = useStyles();
      return (
        <div className='flex flex-col gap-1'>
            <TextField id="outlined-basic" {...props} {...field} size={size} 
                sx={{width: conWidth}}
                type={type === undefined ? 'text': type} 
                variant="outlined"   
                inputProps={{style: {fontSize: 14, width: width !== undefined ? width : '300px',color: (meta.error) && (meta.touched) ? 'red': ''}}}
                className={(meta.error) && (meta.touched) ? classes.root : ''}
                multiline={multiline !== undefined ? multiline : false}
                minRows={maxRows !== undefined ? maxRows : 1}
                maxRows={maxRows !== undefined ? maxRows : 1}


            />
            {(meta.error) && (meta.touched) && 
            <Typography sx={{fontSize: '10px',color: 'red', p:0}}>{meta.error}</Typography>}
        </div>
    )
  }

  export  const FieldSelect = ({list, clickFunction=false, value, disable=false, callback, size='small', height='35px', width='330px', placeholder='Choose',...props}) => {
    // console.log(list)
    const classes = useStyles();
    const [field, meta] = useField(props)
    

    return (
        <FormControl fullWidth>
             {callback !== undefined &&<Select
               {...props} {...field}
               IconComponent = {ExpandMoreIcon}
               disabled={disable}
               size={size}
               value={value}
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               sx={{width: width, height: height,}}
               className={(meta.error && meta.touched) ? classes.root : ''}
                onChange={callback}
                >
                <MenuItem value={'none'} disabled>{placeholder}</MenuItem>

                {/* {list !== undefined  && list.map(val => <MenuItem value={val.id} >{val.name}</MenuItem>)} */}

              </Select>}
            {callback === undefined &&<Select
                {...props} {...field}
                IconComponent = {ExpandMoreIcon}
                disabled={disable}
                size={size}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{width: width, height: height,}}
                className={(meta.error && meta.touched) ? classes.root : ''}
                >
                <MenuItem value={'none'} disabled>{placeholder}</MenuItem>

                {list !== undefined && list.map(val => <MenuItem value={val.id}>{val.name}</MenuItem>)}
               
            </Select>}
            {(meta.error) && (meta.touched) &&  
            <Typography sx={{fontSize: '10px', color: 'red', p:0}}>{meta.error}</Typography>}
        </FormControl>
    )
  }


export  const FillButton = ({text, callBack, disable, height, width, textSize='14px', isLoading=false, hoverBg='primary', bg='primary'}) => {
    return (
        <Button sx={{
            textTransform: 'none',
            backgroundColor: bg,
            color: 'white',
            height: height !== undefined ? height : '36px',
            width: width !== undefined ? width : '93',
            ':hover':{backgroundColor:hoverBg}
        }} variant='contained' disableElevation disabled={disable || isLoading} onClick={callBack}>
           {!isLoading && <Typography sx={{ fontSize:textSize}}>{text}</Typography>}
           {isLoading && <CircularProgress size='25px' color='white'/> }
        </Button> 
        
    )
  }

export  const TextAndField = ({children, space=1}) => {
    return (
      <Stack direction='column' gap={space}>
          {children[0]}
          {children[1]}
      </Stack>
    )
  }  

export  const OutlinedButton = ({text, callBack, disable, height, width, textSize='14px'}) => {
    return (
        <Button sx={{
            textTransform: 'none',
            color: '#242424',
            borderColor: '#242424',
            height: height !== undefined ? height : '36px',
            width: width !== undefined ? width : '93',
            ":hover":{borderColor: 'rgba(0,0,0,0.2)'}
        }} variant='outlined' disabled={disable} onClick={callBack}><Typography sx={{fontSize:textSize}}>{text}</Typography></Button>
    )
  }

  export const CustomIconButton = ({Icon, callBack=()=>{}}, iconStyle='') => {
    return (
      <IconButton onClick={callBack}>
        <Icon className={`text-[18px] ${iconStyle}`}/>
      </IconButton>
    )
  }