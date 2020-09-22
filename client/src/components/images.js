import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./image";
export class images extends Component {
  state = {
    images: [],
    count: 20,
    start: 1,
  };
  componentDidMount() {
    const { count, start } = this.state;
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then((res) => this.setState({ images: res.data }));
  }

  fetchImages = () => {
    const { count, start } = this.state;
    this.setState({ start: this.state.start + count });
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then((res) =>
        this.setState({ images: this.state.images.concat(res.data) })
      );
  };

  render() {
    return (
      <InfiniteScroll
        dataLength={this.state.images.length}
        next={this.fetchImages}
        hasMore={true}
        loader={<h2>Loading....</h2>}
      >
        <div className="images">
          {this.state.images.map((image) => {
            return <Image key={images.id} image={image} />;
          })}
        </div>
      </InfiniteScroll>
    );
  }
}

export default images;
