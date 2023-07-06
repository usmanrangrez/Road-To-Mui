import {
  Avatar,
  Box,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCall,
} from "@mui/icons-material";
const Add = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: { xs: 20, md: "50%" },
          left: 170,
        }}
        onClick={handleOpen}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          width={700}
          height={320}
          borderRadius={5}
          p={3}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography textAlign={"center"} variant="h6" color={"gray"}>
            Create Post
          </Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
            marginBottom={"20px"}
          >
            <Avatar
              src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="span" fontWeight={500}>
              Usman Rangrez
            </Typography>
          </Box>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCall color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            caria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "20%" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
