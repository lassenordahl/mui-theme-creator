import React, { useState } from "react"
import PreviewWrapper from "./PreviewWrapper"
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  Drawer,
  Link,
  MenuItem,
  Select,
  Stack,
  Toolbar,
  Typography,
  Chip,
  Divider,
  Button,
  Card,
} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2";

type Pages = "overview" | "databases" | "migrations";

const PreviewWindow = () => {
  const [page, setPage] = useState<Pages>();

  return (
    <PreviewWrapper>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cockroach Labs
          </Typography>
          <Select
            value="Cockroach Labs"
            label="Organization"
            variant="outlined"
          >
            <MenuItem value={"Cockroach Labs"}>Cockroach Labs</MenuItem>
            <MenuItem value={"SpaceX"}>SpaceX</MenuItem>
            <MenuItem value={"Netflix"}>Netflix</MenuItem>
          </Select>
          <Avatar sx={{ marginLeft: "8px" }} />
        </Toolbar>
      </AppBar>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cockroach Labs
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Stack
          sx={{ width: "200px", background: "light-gray" }}
          spacing={2}
          padding={3}
        >
          <Typography variant="body1">Overview</Typography>
          <Typography variant="h5">Data</Typography>
          <Typography variant="body1">Databases</Typography>
          <Typography variant="body1">Migrations</Typography>
          <Typography variant="body1">SQL Users</Typography>
          <Typography variant="h5">Monitoring</Typography>
          <Typography variant="body1">Metrics</Typography>
          <Typography variant="body1">SQL Activity</Typography>
          <Typography variant="body1">Insights</Typography>
        </Stack>
        <Stack sx={{ flexGrow: 1 }} spacing={2} padding={4}>
          <Stack spacing={2}>
            <Breadcrumbs>
              <Link variant="body2">Clusters</Link>
              <Link variant="body2">movr-prod-1</Link>
              <Typography variant="body2">Overview</Typography>
            </Breadcrumbs>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="h3">Movr-prod-1</Typography>
              <Chip label="Active" />
              <Stack direction="row" spacing={1}>
                <Typography variant="body2">Dedicated Premium</Typography>
                <Divider orientation="vertical" flexItem />
                <Typography variant="body2">3 Regions</Typography>
                <Divider orientation="vertical" flexItem />
                <Typography variant="body2">1 Node</Typography>
                <Divider orientation="vertical" flexItem />
                <Typography variant="body2">v23.1</Typography>
                <Divider orientation="vertical" flexItem />
              </Stack>
              <Stack
                direction="row"
                sx={{ marginLeft: "auto !important" }}
                spacing={1}
              >
                <Button variant="outlined">Actions</Button>
                <Button variant="contained">Connect</Button>
              </Stack>
            </Stack>
          </Stack>
          <Grid container spacing={4} sx={{ width: "100%" }}>
            <Grid xs={4}>
              <Card>
                <Stack spacing={2} padding={2}>
                  <Typography variant="h5">Cluster Settings</Typography>
                  <Typography variant="h6">Cloud</Typography>
                  <Typography variant="body1">AWS</Typography>
                  <Typography variant="h6">Plan Type</Typography>
                  <Typography variant="body1">Serverless</Typography>
                  <Typography variant="h6">Regions</Typography>
                  <Typography variant="body1">asia-southeast1</Typography>
                  <Typography variant="body1">europe-west-1</Typography>
                  <Typography variant="body1">us-central</Typography>
                </Stack>
              </Card>
            </Grid>
            <Grid xs={4}>
              <Card>
                <Stack spacing={2} padding={2}>
                  <Typography variant="h5">Resources Used</Typography>
                  <Typography variant="h6">Cloud</Typography>
                  <Typography variant="body1">AWS</Typography>
                  <Typography variant="h6">Plan Type</Typography>
                  <Typography variant="body1">Serverless</Typography>
                  <Typography variant="h6">Regions</Typography>
                  <Typography variant="body1">asia-southeast1</Typography>
                  <Typography variant="body1">europe-west-1</Typography>
                  <Typography variant="body1">us-central</Typography>
                </Stack>
              </Card>
            </Grid>
            <Grid xs={4}>
              <Card>
                <Stack spacing={2} padding={2}>
                  <Typography variant="h5">Cluster Settings</Typography>
                  <Typography variant="h6">Cloud</Typography>
                  <Typography variant="body1">AWS</Typography>
                  <Typography variant="h6">Plan Type</Typography>
                  <Typography variant="body1">Serverless</Typography>
                  <Typography variant="h6">Regions</Typography>
                  <Typography variant="body1">asia-southeast1</Typography>
                  <Typography variant="body1">europe-west-1</Typography>
                  <Typography variant="body1">us-central</Typography>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </PreviewWrapper>
  )
}

export default PreviewWindow
