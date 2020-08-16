import { decorate, observable } from "mobx";
import instance from "./instance";

class PublisherStore {
  publishers = [];
  loading = true;

  fetchPublishers = async () => {
    try {
      const res = await instance.get("/publishers");
      this.publishers = res.data;
      this.loading = false;
    } catch (error) {
      console.log("ERROOOROROROROR", error);
    }
  };
}

decorate(PublisherStore, {
  publishers: observable,
  loading: observable,
});

const publisherStore = new PublisherStore();
publisherStore.fetchPublishers();
export default publisherStore;
