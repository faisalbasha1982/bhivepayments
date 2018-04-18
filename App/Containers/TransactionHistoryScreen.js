import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import { NavigationActions } from "react-navigation";
import { Container, Content, Header, Button } from "native-base";

import {Colors} from '../Themes/';
import styles from './Styles/TransactionHistoryScreenStyle';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import CarouselComponent from "../Components/CarouselComponent";

class TransactionHistoryScreen extends Component {

    goBack = () => {
        this.props.navigateback;
    }

    static navigationOptions = {
        header: null                     
      };
    
    constructor(props) {
        super(props);

        let self = this;

        this.state = {
            loading: false,
            data1: false,
            data2: false,
            data3: false,


            data: [{
                name: {
                    first: 'ShopWise',
                    last: 'Success . 200 AED'
                },
                email: 'fasdfdasgfdf@gasdf.com',
                time: '3:20 am',
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
                time: '1:30 am',
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
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,

        };
    }

    makeRemoteRequest = () => {

    };


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

    renderSeparator = () => {
        return (<View style={styles.renderSeparator} />);
    };

    _changeData = (index) => {
        switch (index) {
            case 0:
                this.setState({
                    data: [{
                        name: {
                            first: 'ShopWise',
                            last: 'Success . 200 AED'
                        },
                        email: 'fadfdfsdf@gasdf.com',
                        time: '3:20 pm',
                        picture: {
                            thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'Umbrella',
                            last: 'Success . 200 AED'
                        },
                        email: 'fafdfdfsdf@gasdf.com',
                        time: '1:30 am',
                        picture: {
                            thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'The Lucky Ones',
                            last: 'Failed . 200 AED'
                        },
                        email: 'farewsdf@gasdf.com',
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
                        email: 'fasdsfsdf@gasdf.com',
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
                        email: 'faszxsdf@gasdf.com',
                        time: 'April 23',
                        picture: {
                            thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                        }
                    }
                    ]
                });
                break;
            case 1:
                this.setState({
                    data: [{
                        name: {
                            first: 'ShopWise',
                            last: 'Failed . 200 AED'
                        },
                        email: 'facvcbsdf@gasdf.com',
                        time: '3:20 pm',
                        picture: {
                            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'Umbrella',
                            last: 'Success . 200 AED'
                        },
                        email: 'fafgersdf@gasdf.com',
                        time: '1:30 pm',
                        picture: {
                            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'The Lucky Ones',
                            last: 'Failed . 200 AED'
                        },
                        email: 'fasdasdf@gasdf.com',
                        time: 'May 12',
                        picture: {
                            thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'Cribys & Bros',
                            last: 'Failed . 200 AED'
                        },
                        email: 'fasddfdff@gasdf.com',
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
                        email: 'fawewsdf@gasdf.com',
                        time: 'April 23',
                        picture: {
                            thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                        }
                    }
                    ]
                });
                break;
            case 2:
                this.setState({
                    data: [{
                        name: {
                            first: 'ShopWise',
                            last: 'Success . 200 AED'
                        },
                        email: 'fasrtyydf@gasdf.com',
                        time: '3:20 pm',
                        picture: {
                            thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'Umbrella',
                            last: 'Success . 200 AED'
                        },
                        email: 'faserwdf@gasdf.com',
                        time: '1:30 am',
                        picture: {
                            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'The Lucky Ones',
                            last: 'Failed . 200 AED'
                        },
                        email: 'fyttasdf@gasdf.com',
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
                        email: 'fadfdfsdf@gasdf.com',
                        time: 'May 09',
                        picture: {
                            thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'Utopia',
                            last: 'Failed . 200 AED'
                        },
                        email: 'fasdfdsdf@gasdf.com',
                        time: 'April 23',
                        picture: {
                            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
                        }
                    }
                    ]
                });
                break;

            case 3:
                this.setState({
                    data: [{
                        name: {
                            first: 'ShopWise',
                            last: 'Success . 200 AED'
                        },
                        email: 'fasasrtyydf@gasdf.com',
                        time: '3:20 am',
                        picture: {
                            thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'Umbrella',
                            last: 'Success . 200 AED'
                        },
                        email: 'fasaserwdf@gasdf.com',
                        time: '1:30 am',
                        picture: {
                            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'The Lucky Ones',
                            last: 'Failed . 200 AED'
                        },
                        email: 'fsattasdf@gasdf.com',
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
                        email: 'faewdfdfsdf@gasdf.com',
                        time: 'May 09',
                        picture: {
                            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'Utopia',
                            last: 'Failed . 200 AED'
                        },
                        email: 'fastrdfdsdf@gasdf.com',
                        time: 'April 23',
                        picture: {
                            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
                        }
                    }
                    ]
                });
                break;
            case 4:
                this.setState({
                    data: [{
                        name: {
                            first: 'Shopwise',
                            last: 'Success . 200 AED'
                        },
                        email: 'fasasdsasrtyydf@gasdf.com',
                        time: '3:20 pm',
                        picture: {
                            thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'Umbrella',
                            last: 'Success . 200 AED'
                        },
                        email: 'fasdssaserwdf@gasdf.com',
                        time: '1:30 am',
                        picture: {
                            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'The Lucky Ones',
                            last: 'Failed . 200 AED'
                        },
                        email: 'fsattartrtrsdf@gasdf.com',
                        time: 'May 12',
                        picture: {
                            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'Cribys & Bros',
                            last: 'Success . 200 AED'
                        },
                        email: 'faewdfdrtrtfsdf@gasdf.com',
                        time: 'May 09',
                        picture: {
                            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'Utopia',
                            last: 'Failed . 200 AED'
                        },
                        email: 'fastrdfdsdf@gasdf.com',
                        time: 'April 23',
                        picture: {
                            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
                        }
                    }
                    ]
                });
                break;
            case 5:
                this.setState({
                    data: [{
                        name: {
                            first: 'ShopWise',
                            last: 'Success . 200 AED'
                        },
                        email: 'fasasdsasrtyaf@gasdf.com',
                        time: '3:20 pm',
                        picture: {
                            thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'Umbrella',
                            last: 'Success . 200 AED'
                        },
                        email: 'fasdssasedfdfrwdf@gasdf.com',
                        time: '1:30 pm',
                        picture: {
                            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'The Lucky Ones',
                            last: 'Failed . 200 AED'
                        },
                        email: 'fsattarwewetrtrsdf@gasdf.com',
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
                        email: 'faewdfwewdrtrtfsdf@gasdf.com',
                        time: 'May 09',
                        picture: {
                            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'Utopia',
                            last: 'Failed . 200 AED'
                        },
                        email: 'fastrdfdzxssdf@gasdf.com',
                        time: 'April 23',
                        picture: {
                            thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                        }
                    }
                    ]
                });
                break;
            case 6:
                this.setState({
                    data: [{
                        name: {
                            first: 'ShopWise',
                            last: 'Success . 200 AED'
                        },
                        email: 'fadfdsasrtyaf@gasdf.com',
                        time: '3:20 pm',
                        picture: {
                            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'Umbrella',
                            last: 'Success . 200 AED'
                        },
                        email: 'asdssasedfdfrwdf@gasdf.com',
                        time: '1:30 pm',
                        picture: {
                            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'The Lucky Ones',
                            last: 'Failed . 200 AED'
                        },
                        email: 'fsatrwewetrtrsdf@gasdf.com',
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
                        email: 'faewdfwdrtrtfsdf@gasdf.com',
                        time: 'May 09',
                        picture: {
                            thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                        }
                    },

                    {
                        name: {
                            first: 'Utopia',
                            last: 'Failed . 200 AED'
                        },
                        email: 'sdf@gasdf.com',
                        time: 'April 23',
                        picture: {
                            thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                        }
                    }
                    ]
                });
                break;
        }

    }

 

    shouldComponentUpdate(nextProps,nextState)
    {
        return this.state.data === nextState.data?false:true;
    }

    render() {
        return (
        <Container>
            <Content scrollEnabled>
            <View style={styles.container}>
                <View style={styles.topHeader}>
                        <TouchableOpacity onPress={() => {this.props.navigate({routeName:'ProfileScreen'})}}>                    
                            <Image source={require('../Images/Icons/back-button.png')} style={{width:50, height:50}}/>
                        </TouchableOpacity>
                    <Text style={styles.transactionHistoryText}>Transaction History</Text>
                </View>   
                    <CarouselComponent style={{flex:8}}/>
                <View style={styles.lineStyle}/>
                <View style={styles.viewStyle}>
                    <List containerStyle={styles.containerStyle}>
                        <FlatList data={this.state.data}
                            renderItem={
                                ({ item }) => (<ListItem roundAvatar subtitle={
                                    <Text style={ styles.itemName}> {item.name.last} </Text>
                                }
                                    title={< Text style={styles.flTitle}> {item.name.first} </Text>}
                                    avatar={
                                        { uri: item.picture.thumbnail }}
                                    containerStyle={
                                        { borderBottomWidth: 0, }}
                                    rightIcon={< Text style={styles.timeText}> {item.time} </Text>} />
                                )
                            }
                            keyExtractor={item => item.email}
                            ItemSeparatorComponent={this.renderSeparator}
                            ListHeaderComponent={this.renderHeader}
                            ListFooterComponent={this.renderFooter}
                            onRefresh={this.handleRefresh}
                            refreshing={this.state.refreshing}
                            onEndReached={this.handleLoadMore}
                            onEndReachedThreshold={50}/>
                    </List>
                </View>
            </View >
            </Content>
            </Container>
        );
    }
}


const mapStateToProps = state => {
    return {
        //fetching: LoginSelectors.getFetching(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {

        resetNavigate: navigationObject => dispatch(NavigationActions.reset(navigationObject)),
        navigate: navigationObject => dispatch(NavigationActions.navigate(navigationObject)),
        navigateBack: () => dispatch(NavigationActions.back()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistoryScreen);