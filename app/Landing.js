import { View, Text, StyleSheet, ScrollView, Pressable, Modal, TouchableOpacity, Animated, PanResponder } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Landing({ goTo }) {
    const initialCards = [
        { 
            id: 1, 
            nickname: 'Day', 
            age: 21, 
            bio: 'erm erm erm erm erm erm erm', 
            about: ['She/Her', 'Second Year', 'BMMA - Graphic Design'], 
            interests: 'Infinity Nikki, Valo, Gamble sa Gacha games', 
            hobbies: 'kms', 
            lookingFor: 'Study buddy' 
        },
        { 
            id: 2, 
            nickname: 'Yohan', 
            age: 18, 
            bio: 'spending habits', 
            about: ['They/Them', 'Second Year', 'BMMA - Graphic Design'], 
            interests: 'spend, spend on food, spend on merch, say yes to spending', 
            hobbies: 'spend', 
            lookingFor: 'food buddy, shopping buddy' 
        },
        { 
            id: 3, 
            nickname: 'Lili', 
            age: 20, 
            bio: 'i cant do this anymore please end this misery', 
            about: ['She/Her', 'Second Year', 'BMMA - Graphic Design'], 
            interests: 'cats, dogs, cheat on my dogs with stray cats and dogs, gamble on gacha, spend all my net worth on food', 
            hobbies: 'valo, genshin, watch random stuff, fangirl blackpink', 
            lookingFor: 'Study buddy' 
        },
        { 
            id: 4, 
            nickname: 'Gem', 
            age: 23, 
            bio: 'i sound drunk all the time but i swear im sober', 
            about: ['He/Him', 'Second Year', 'BMMA - Graphic Design'], 
            interests: 'dana', 
            hobbies: 'dana', 
            lookingFor: 'dana' 
        },
        {
            id: 5, 
            nickname: 'Tyrieffy', 
            age: 23, 
            bio: 'hahaHAHSHAHAHHAHAHAH burn everything', 
            about: ['She/Her', 'Second Year', 'BMMA - Graphic Design'], 
            interests: 'goon over gacha characters and gamblle for them', 
            hobbies: 'goon, workout, crashout and make things harder for me (software engr), goon', 
            lookingFor: 'Study buddyddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd' 
        },
        {
            id: 6, 
            nickname: 'moimoi', 
            age: 22, 
            bio: 'play aroun valo enemies as if im playing with cockroach lives', 
            about: ['She/Her', 'Second Year', 'BMMA - Graphic Design'], 
            interests: 'valo, hotdog sinigang', 
            hobbies: 'valo', 
            lookingFor: 'Study buddy' 
        },
    ];

    const [cards, setCards] = useState(initialCards);
    const pan = useRef(new Animated.ValueXY()).current;
    const opacity = useRef(new Animated.Value(1)).current;
    const isSwiping = useRef(false);

    const likeOpacity = pan.x.interpolate({
        inputRange: [50, 150],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    const nopeOpacity = pan.x.interpolate({
        inputRange: [-150, -50],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    useEffect(() => {
        isSwiping.current = false;
        pan.setValue({ x: 0, y: 0 });
        opacity.setValue(1);
    }, [cards]);

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => !isSwiping.current,
            onPanResponderGrant: () => {
                isSwiping.current = true;
            },
            onPanResponderMove: Animated.event(
                [null, { dx: pan.x, dy: pan.y }],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx > 100) {
                    swipeRight();
                } else if (gestureState.dx < -100) {
                    swipeLeft();
                } else {
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: true,
                    }).start(() => {
                        isSwiping.current = false;
                    });
                }
            },
            onPanResponderTerminate: () => {
                isSwiping.current = false;
            },
        })
    ).current;

    const swipeRight = () => {
        Animated.parallel([
            Animated.timing(pan, {
                toValue: { x: 500, y: 0 },
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start(() => {
            removeTopCard();
        });
    };

    const swipeLeft = () => {
        Animated.parallel([
            Animated.timing(pan, {
                toValue: { x: -500, y: 0 },
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start(() => {
            removeTopCard();
        });
    };

    const removeTopCard = () => {
        setCards(prev => prev.slice(1));
    };

    const [visible, changeVisibility] = useState(false);
    const [selectedYear, setSelectedYear] = useState({
        '1st Year': false,
        '2nd Year': false,
        '3rd Year': false,
        '4th Year': false,
    });

    const [selectedCourse, setSelectedCourse] = useState({
        'Graphic Design': false,
        'Animation': false,
        'Film and Production': false,
        'Game Development': false,
        'Computer Science': false,
        'Entrepreneurship': false,
    });

    const [selectedLf, setSelectedLf] = useState({
        'Study Buddy': false,
        'Food Buddy': false,
        'Gaming Buddy': false,
        'Dormmate': false,
    });

    const [appliedFilters, setAppliedFilters] = useState({
        year: [],
        course: [],
        intent: []
    });

    const toggleFilter = () => {
        changeVisibility(!visible);
    };

    const toggleSelection = (type, key) => {
        if (type === 'year') {
            setSelectedYear(prev => ({ ...prev, [key]: !prev[key] }));
        } else if (type === 'course') {
            setSelectedCourse(prev => ({ ...prev, [key]: !prev[key] }));
        } else if (type === 'intent') {
            setSelectedLf(prev => ({ ...prev, [key]: !prev[key] }));
        }
    };

    const apply = () => {
        const selectedYears = Object.keys(selectedYear).filter(key => selectedYear[key]);
        const selectedCourses = Object.keys(selectedCourse).filter(key => selectedCourse[key]);
        const selectedIntents = Object.keys(selectedLf).filter(key => selectedLf[key]);

        setAppliedFilters({
            year: selectedYears,
            course: selectedCourses,
            intent: selectedIntents
        });
        changeVisibility(false);
    };

    const clear = () => {
        setSelectedYear({
            '1st Year': false,
            '2nd Year': false,
            '3rd Year': false,
            '4th Year': false,
        });
        setSelectedCourse({
            'Graphic Design': false,
            'Animation': false,
            'Film and Production': false,
            'Game Development': false,
            'Computer Science': false,
            'Entrepreneurship': false,
        });
        setSelectedLf({
            'Study Buddy': false,
            'Food Buddy': false,
            'Gaming Buddy': false,
            'Dormmate': false,
        });

        setAppliedFilters({
            year: [],
            course: [],
            intent: []
        });
    };

    const renderCard = (card, index) => {
        const isTopCard = index === 0;
        const animatedStyle = isTopCard
            ? { transform: [{ translateX: pan.x }, { translateY: pan.y }], opacity }
            : { transform: [{ translateY: index * -5 }] };

        return (
          
            <Animated.View
                key={card.id}
                style={[styles.card, animatedStyle, { zIndex: cards.length - index }]}
                {...(isTopCard ? panResponder.panHandlers : {})}
            >
                <Text style={styles.nickname}>
                    {card.nickname}, <Text style={styles.age}>{card.age}</Text>
                </Text>
                <View style={styles.bioContain}>
                    <Text style={styles.bio}>{card.bio}</Text>
                </View>
                <Text style={styles.labels}>About Me</Text>
                <View style={styles.aboutmecontain}>
                    {card.about.map((item, idx) => (
                        <View key={idx} style={styles.aboutmeparent}>
                            <Text style={styles.aboutmechild}>{item}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.bioContain}>
                    <Text style={styles.labels}>Interests</Text>
                    <Text style={styles.bio2}>{card.interests}</Text>
                </View>
                <View style={styles.bioContain}>
                    <Text style={styles.labels}>Hobbies</Text>
                    <Text style={styles.bio2}>{card.hobbies}</Text>
                </View>
                <View style={styles.bioContain}>
                    <Text style={styles.labels}>Looking For</Text>
                    <Text style={styles.bio2}>{card.lookingFor}</Text>
                </View>
                {isTopCard && (
                    <>
                        <Animated.View style={[styles.overlay, styles.likeOverlay, { opacity: likeOpacity }]}>
                            <Text style={styles.overlayText}><AntDesign name="check" size={24} color="green" /></Text>
                        </Animated.View>
                        <Animated.View style={[styles.overlay, styles.nopeOverlay, { opacity: nopeOpacity }]}>
                            <Text style={styles.overlayText}><AntDesign name="close" size={24} color="red" /></Text>
                        </Animated.View>
                    </>
                )}
            </Animated.View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Pressable onPress={toggleFilter} style={{ marginRight: 15 }}>
                        <Ionicons name="filter-sharp" size={24} color="black" />
                    </Pressable>
                </View>
                <Modal transparent={true} visible={visible} onRequestClose={toggleFilter}>
                    <View style={styles.overlay}>
                        <TouchableOpacity
                            style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                            onPress={toggleFilter}
                        />
                        <View style={styles.filter}>
                            <Text style={styles.filterHeading}>Filter by:</Text>
                            <View>
                                <Text>Course</Text>
                                <View style={{ marginVertical: 5 }}>
                                    {Object.keys(selectedCourse).map(course => (
                                        <TouchableOpacity
                                            key={course}
                                            onPress={() => toggleSelection('course', course)}
                                            style={styles.filterOptions}
                                        >
                                            <Ionicons
                                                name={selectedCourse[course] ? 'checkbox' : 'square-outline'}
                                                size={20}
                                                color="black"
                                                style={{ marginRight: 10 }}
                                            />
                                            <Text>{course}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column', flex: 1 }}>
                                    <Text>Year</Text>
                                    <View style={{ marginVertical: 5 }}>
                                        {Object.keys(selectedYear).map(year => (
                                            <TouchableOpacity
                                                key={year}
                                                onPress={() => toggleSelection('year', year)}
                                                style={styles.filterOptions}
                                            >
                                                <Ionicons
                                                    name={selectedYear[year] ? 'checkbox' : 'square-outline'}
                                                    size={20}
                                                    color="black"
                                                    style={{ marginRight: 10 }}
                                                />
                                                <Text>{year}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', flex: 1 }}>
                                    <Text>Connection Intent</Text>
                                    <View style={{ marginVertical: 5 }}>
                                        {Object.keys(selectedLf).map(intent => (
                                            <TouchableOpacity
                                                key={intent}
                                                onPress={() => toggleSelection('intent', intent)}
                                                style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}
                                            >
                                                <Ionicons
                                                    name={selectedLf[intent] ? 'checkbox' : 'square-outline'}
                                                    size={20}
                                                    color="black"
                                                    style={{ marginRight: 10 }}
                                                />
                                                <Text>{intent}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
                                <Pressable onPress={clear} style={{ backgroundColor: '#ebebebff', padding: 10, paddingInline: 30, borderRadius: 30 }}>
                                    <Text style={{ fontFamily: 'HelveticaNeueRoman' }}>Clear</Text>
                                </Pressable>
                                <Pressable onPress={apply} style={{ backgroundColor: '#F83758', padding: 10, paddingInline: 30, borderRadius: 30 }}>
                                    <Text style={{ color: 'white', fontFamily: 'HelveticaNeueRoman' }}>Apply</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    
                    <View style={{ flexDirection: 'row' }}>
                        {[...appliedFilters.year, ...appliedFilters.course, ...appliedFilters.intent].map((filter, index) => (
                            <View
                                key={index}
                                style={{
                                    backgroundColor: '#F83758',
                                    fontFamily: 'HelveticaNeueRoman',
                                    paddingHorizontal: 10,
                                    paddingVertical: 4,
                                    borderRadius: 20,
                                    marginRight: 5,
                                }}
                            >
                                <Text style={{ color: 'white', fontSize: 12, fontFamily: 'HelveticaNeueRoman' }}>{filter}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
     
            <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
                <View style={{ marginTop: 20,minHeight: 500, alignItems: 'center', position: 'relative', marginBottom: 50 }}>
                    {cards.length > 0 ? (
                        cards.map((card, index) => renderCard(card, index))
                    ) : (
                        <Text style={{ fontFamily: 'HelveticaNeueRoman', fontSize: 15 }}>
                            No more profiles to show!
                        </Text>
                    )}
                </View>
                {cards.length > 0 && (
                    <View style={styles.common}>
                        <Text style={styles.commonHeading}>Things we can bond over:</Text>
                        <View style={styles.listCommon}>
                            <View style={styles.itemCommon}><Text>Year</Text></View>
                            <View style={styles.itemCommon}><Text>Course</Text></View>
                        </View>
                    </View>
                )}
            </ScrollView>
            <View style={styles.navbar}>
                <View style={styles.selectedNav}>
                    <MaterialCommunityIcons name="cards" size={35} color="white" />
                    <Text style={{ color: 'white' }}>Meet</Text>
                </View>
                <FontAwesome name="wechat" size={30} color="#FCA5B4" />
                <Pressable onPress={() => goTo('notifications')}>
                    <Ionicons name="notifications" size={30} color="#FCA5B4" />
                </Pressable>
                <Pressable onPress={() => goTo('account')}>
                    <MaterialCommunityIcons name="account" size={30} color="#FCA5B4" />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        padding: 20,
        alignItems: 'center'
    },
    header: {
        marginTop: 10,
        height: 70,
        
        flexWrap: 'wrap',
        padding: 20,
        width: '100%',
        alignItems: 'flex-end',
        flexDirection: 'row',
        gap: 4,
    },
    navbar: {
        position: 'absolute',
        backgroundColor: '#F83758',
        width: '115%',
        bottom: 0,
        height: 90,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingBottom: 15,
        display: 'flex',
        flexDirection: 'row',
    },
    selectedNav: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0.1
    },
    card: {
        width: 320,
        backgroundColor: '#FFD6EA',
        margin: 10,
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#B3B3B3',
        borderStyle: 'solid',
        padding: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 3,
        position: 'absolute',
        top: 0,
        
    },
    nickname: {
        textAlign: 'center',
        fontFamily: 'HelveticaNeueHeavy',
        color: '#B3B3B3',
        fontSize: 20,
        paddingLeft: 5,
        paddingTop: 2,
    },
    age: {
        fontSize: 14,
        fontFamily: 'HelveticaNeueHeavy',
    },
    bioContain: {
        marginTop: 8,
        paddingBottom: 4,
        minHeight: 10,
        borderRadius: 7,
        width: 295,
        backgroundColor: '#ebebebff',
    },
    bio: {
        fontFamily: 'HelveticaNeueRoman',
        color: '#B3B3B3',
        fontSize: 12,
        paddingTop: 6,
        paddingLeft: 2,
        paddingRight: 2,
        textAlign: 'center',
        lineHeight: 16,
    },
    labels: {
        fontFamily: 'HelveticaNeueHeavy',
        color: '#B3B3B3',
        fontSize: 20,
        paddingLeft: 5,
        paddingTop: 10,
    },
    aboutmecontain: {
        width: 295,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    aboutmeparent: {
        padding: 10,
        borderRadius: 18,
        marginLeft: 5,
        marginBottom: 10,
        backgroundColor: '#ebebebff',
    },
    aboutmechild: {
        fontFamily: 'HelveticaNeueHeavy',
        color: '#B3B3B3',
    },
    bio2: {
        fontFamily: 'HelveticaNeueRoman',
        color: '#B3B3B3',
        fontSize: 12,
        paddingTop: 6,
        paddingLeft: 10,
        paddingRight: 2,
        lineHeight: 16,
    },
    body: {
        flex: 1,
    },
    common: {
        width: 320,
        backgroundColor: 'white',
        margin: 10,
        alignSelf: 'center',
        borderRadius: 10,
        borderStyle: 'solid',
        padding: 20,
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 3,
        gap: 5
    },
    commonHeading: {
        fontFamily: 'HelveticaNeueHeavy',
        fontSize: 15
    },
    listCommon: {
        display: 'flex',
        flexDirection: 'row',
    },
    itemCommon: {
        backgroundColor: '#ebebebff',
        padding: 10,
        borderRadius: 50,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 'HelveticaNeueRoman',
        marginRight: 7
    },
    overlay: {
        position: 'absolute',
        top: 20,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
    },
    likeOverlay: {
        left: 20,
        borderColor: 'green',
    },
    nopeOverlay: {
        right: 20,
        borderColor: 'red',
    },
    overlayText: {
        fontFamily: 'HelveticaNeueHeavy',
        fontSize: 24,
        color: '#B3B3B3',
    },
    filter: {
        backgroundColor: 'white',
        width: 320,
        height: 470,
        borderRadius: 30,
        zIndex: 10,
        alignItems: 'left',
        padding: 30,
        gap: 10,
    },
    filterHeading: {
        fontFamily: 'HelveticaNeueHeavy',
        fontSize: 15,
        textAlign: 'left',
        width: '100%',
    },
    filterOptions: {
        flexDirection: 'row',
        marginBottom: 5,
        flexWrap: 'wrap',
    }
});