import React, {useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { db } from "firebase";
import {  getDocs, collection } from "firebase/firestore";
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};
const useStyles = makeStyles(styles);

export default function AgentList() {
const usersCollectionRef = collection(db, "appAgent");
const [usersAsArray, setUsersAsArray] = useState([]);
const getUsers = async () => {
  try {
    const data = await getDocs(usersCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data()
    }));
    const keyOrder = ['username', 'agencyName', 'agencyAddress', 'phone', 'email'];

    let array = filteredData.map(x => {
      return keyOrder.map(key => x[key]);
    });
    setUsersAsArray(array);
    console.log(filteredData);
    console.log(array);
  } catch (err) {
    console.error(err);
  }
};

useEffect(() => {
  getUsers();
}, []);
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Users</h4>
            <p className={classes.cardCategoryWhite}>
              List of users
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={['Username', 'Agency name', 'Agency address', 'Phone', 'Email']}
              tableData={usersAsArray}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
