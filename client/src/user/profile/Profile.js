import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  async componentDidMount() {
    await this.loadCurrentlyLoggedInUserDetails();
  }

  async loadCurrentlyLoggedInUserDetails() {
    try {
      this.setState({
        loading: true
      });

      this.setState({
        loading: false
      });
    } catch (error) {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div class="container">
        <div class="main-body">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card card-body d-flex flex-column align-items-center text-center">
                {this.props.currentUser.name}
                <img
                  src={this.props.currentUser.imageUrl}
                  alt={this.props.currentUser.name}
                  class="rounded-circle"
                  width="150"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
