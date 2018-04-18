import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View,Dimensions,TouchableOpacity,Image,Text } from "react-native";
import {
    
    Thumbnail
  } from "native-base";
import styles from "./Styles/CarouselStyles";
import { Colors } from "../Themes";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const horizontalMargin = 0;
const slideWidth = 120;
const sliderWidth = 365;
const itemWidth = slideWidth + (horizontalMargin);
const itemHeight = 120;
const viewportHeight = Dimensions.get('window').height;
const viewportWidth  = Dimensions.get('window').width;

class CarouselComponent extends PureComponent 
{
    constructor(props)
    {
        super(props);

        this.state = {

            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
            refreshData: true,
    
            picture: {
                thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
            },
    
            barcodeImage: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    
            data: [{
                name: {
                    first: 'ShopWise',
                    last: 'Success . 200 AED'
                },
                email: 'fasdfdasgfdf@gasdf.com',
                time: '3:20',
                picture: {
                    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                }
            },
    
            {
                name: {
                    first: 'Umbrella',
                    last: 'Success . 200 AED'
                },
                email: 'fasdhgddddggf@gasdf.com',
                time: '1:30',
                picture: {
                    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                }
            },
    
            {
                name: {
                    first: 'The Lucky Ones',
                    last: 'Failed . 200 AED'
                },
                email: 'fsasdkkjjf@gasdf.com',
                time: 'May 12',
                picture: {
                    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                }
            },
    
            {
                name: {
                    first: 'Cribys & Bros',
                    last: 'Success . 200 AED'
                },
                email: 'faujyjsdf@gasdf.com',
                time: 'May 09',
                picture: {
                    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                }
            },
    
            {
                name: {
                    first: 'Utopia',
                    last: 'Success . 200 AED'
                },
                email: 'fasdf@gasdf.com',
                time: 'April 23',
                picture: {
                    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                }
            }
    
            ],
    
            entries: [{
                title: 'cribys & Bros',
                picture: {
                    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                }
            },
            {
                title: '4AG Clothing',
                picture: {
                    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
                }
            },
            {
                title: 'The Lucky Ones',
                picture: {
                    thumbnail: 'https://picsum.photos/200/300/?random'
                }
            }
            ]
    
        };
    }

    handleRefresh = () => {
        this.setState({
            page: 1,
            seed: this.state.seed + 1,
            refreshing: true
        },
            () => {
                this.makeRemoteRequest();
            }
        );
    };
    
    handleLoadMore = () => {
        this.setState({
            page: this.state.page + 1
        },
            () => {
                this.makeRemoteRequest();
            }
        );
    };
    
    _changeData = (index) => {
        switch (index) {
            case 0:
                this.setState({...this.state, barcodeImage: 'https://randomuser.me/api/portraits/thumb/men/83.jpg' });
                break;
            case 1:
                this.setState({ ...this.state,barcodeImage: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' });
                break;
            case 2:
                this.setState({ ...this.staate,barcodeImage: 'https://picsum.photos/200/300/?random' });
                break;
            case 3:
                this.setState({ ...this.state,barcodeImage: 'https://randomuser.me/api/portraits/thumb/men/83.jpg' });
                break;
            case 4:
                this.setState({ ...this.state,barcodeImage: 'https://picsum.photos/200/300/?random' });
                break;
            case 5:
                this.setState({ ...this.state,barcodeImage: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' });
                break;
            case 6:
                this.setState({ ...this.state,barcodeImage: 'https://randomuser.me/api/portraits/thumb/men/83.jpg' });
                break;
        }
    }
    
    
    makeRemoteRequest = () => {
    };
    
    handleRefresh = () => {
    };
    
    renderSeparator = () => {
        return (<View style={styles.renderSeparator} />);
    };
    _animate = (index) => {
        this._carousel.snapToItem(index, true);
    }
    
    _renderItem = ({ item, index }) => {
    
        if (index === this._carousel.currentIndex) {
            return (<TouchableOpacity onPress={
                () => { this._changeData(index); }
            }>
                <View style={styles.item}>
                    <View style={styles.slideInnerContainer}>
                        <Image  source={{ uri: item.picture.thumbnail }} style={{ width: 50, height: 50, borderRadius: 50 / 2 }} />
                    </View>
                </View>
                <View>
                    <Text style={styles.textBelow}> {item.title} </Text>
                </View>
            </TouchableOpacity>
            );
        } else
            return (<TouchableOpacity onPress={
                () => {
                    this._changeData(index);
                    this._animate(index);
                }
            }>
                <View style={styles.itemNormal}>
                    <View style={styles.slideInnerContainer}>
                        <Image  source={{ uri: item.picture.thumbnail }} style={{ width: 120, height: 120, borderRadius: 120 / 2 }} />
                    </View>
                </View>
                <View>
                    <Text style={styles.textBelow}> {item.title} </Text>
                </View>
            </TouchableOpacity>
            );
    }
    render()
    {
            return (
                        <View style={styles.container}>
                            <View style={styles.innerContainer}>
                                <Carousel ref={
                                      (c) => { this._carousel = c; }}
                                      data={this.state.entries}
                                      renderItem={this._renderItem}
                                      sliderWidth={sliderWidth}
                                      enableSnap={true}
                                      lockScrollWhileSnapping={false}
                                      loop={true}
                                      loopClonesPerSide={25}
                                      inactiveSlideScale={0.5}
                                      enableMomentum={true}
                                      decelerationRate={1.9}
                                      autoplay={false}
                                      firstItem={0}
                                      activeSlideOffset={30}
                                      itemWidth={itemWidth}
                                      onSnapToItem={(index) => { this._changeData(index) }} />
                            </View>
                        </View>
                );
    }
}


export default CarouselComponent;