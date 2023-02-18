import React, {useState, useEffect} from "react";
import { Redirect, useParams, useRouteMatch } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import SnackOrBoozeApi from "./Api";

function FoodItem({ cantFind }) {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState([]);

    const snacksMatch = useRouteMatch('/snack/:id')
    const drinksMatch = useRouteMatch('/drink/:id')

  useEffect(() => {
    async function getItems() {
      let items = undefined;
      if(!!snacksMatch){
        items = await SnackOrBoozeApi.getSnacks();
      }
      else if (!!drinksMatch) {
        items = await SnackOrBoozeApi.getDrinks();
      }
      let item = items.find(item => item.id === id);
      setItem(item);
      setIsLoading(false);
    }
    getItems();
  }, []);


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  if (!isLoading && !item) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
