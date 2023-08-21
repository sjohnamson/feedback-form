import { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

function BottomNavBar() {
    const [value, setValue] = useState(0);
    const history = useHistory()

    const bottomNavBar = (value) => {
        switch (value) {
            case 0:
                return history.push('/')
            case 1:
                return history.push('/admin')
            default:
                break;
        }
    }

    return (
        <Paper
            sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '70%', margin: 'auto'}}
            elevation={4}
        >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{ backgroundColor: '#033076'}}
            >
                <BottomNavigationAction
                    onClick={() => bottomNavBar(0)}
                    label="User"
                    icon={<PersonIcon />}
                />
                <BottomNavigationAction
                    onClick={() => bottomNavBar(1)}
                    label="Admin" icon={<AdminPanelSettingsIcon />}
                />
            </BottomNavigation>
        </Paper>
    )
}

export default withRouter(BottomNavBar) 