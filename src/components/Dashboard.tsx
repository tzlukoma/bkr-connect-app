import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'

import Button from '@material-ui/core/Button'
import { Dialog, DialogTitle, Grid, Divider } from '@material-ui/core'

import AddBookForm from './AddBookForm'
import BookList from './BookList'

import { ReactComponent as PlusIcon } from '../assets/dark-icons/plus-circle.svg'


const Dashboard = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        setDialogOpen(true)
    }

    const handleClose = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        setDialogOpen(false)
    }
    return (

        <>
            <Container style={{ padding: 20 }}>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        style={{ display: 'flex', paddingBottom: 5 }}
                    >
                        <Typography variant='h4' style={{ paddingRight: 20 }}>
                            Book List
            </Typography>
                        <Button onClick={handleOpen}>
                            <PlusIcon style={{ marginRight: 10 }} /> Add a book
            </Button>
                    </Grid>
                    <Grid item
                        xs={12}
                        sm={8}>
                        <div style={{ marginBottom: 10 }}>
                            <FormControl style={{ width: "80%" }}>
                                <TextField
                                    name="searchTerm"
                                    placeholder="Search for a book by title, author or sku"
                                    size="small"
                                    variant='outlined'
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}

                                />
                            </FormControl>
                        </div>

                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <BookList searchTerm={searchTerm} />
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}></Grid>
                </Grid>
            </Container>
            <Dialog open={dialogOpen} onClose={handleClose} maxWidth='xl'>
                <DialogTitle>
                    <Typography >Add Book</Typography>
                </DialogTitle>
                <AddBookForm isDialogOpen={setDialogOpen} />
            </Dialog>
        </>

    )
}

export default Dashboard
