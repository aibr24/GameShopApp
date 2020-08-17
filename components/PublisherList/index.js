import React from "react";

import publisherStore from "../../stores/PublisherStore";
import PublisherItem from "./PublisherItem";
import { List, Content, Spinner } from "native-base";
import { observer } from "mobx-react";

const PublisherList = ({ navigation }) => {
  if (publisherStore.loading) return <Spinner />;

  const publisherList = publisherStore.publishers.map((publisher) => (
    <PublisherItem
      publisher={publisher}
      key={publisher.id}
      navigation={navigation}
    />
  ));

  return (
    <Content>
      <List>{publisherList}</List>
    </Content>
  );
};
export default observer(PublisherList);
