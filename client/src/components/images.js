import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./image";
export class images extends Component {
  state = {
    images: [],
    count: 2,
    start: 1,
  };
  componentDidMount() {
    const { count, start } = this.state;
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then((res) => this.setState({ images: res.data }));
  }
  render() {
    console.log(this.state);
    return (
      <div className="images">
        <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.fetchImages}
          hasMore={true}
          loader={<h2>Loading....</h2>}
        >
          {this.state.images.map((image) => {
            return <Image key={images.id} image={image} />;
          })}
        </InfiniteScroll>
      </div>
    );
  }
}

export default images;
