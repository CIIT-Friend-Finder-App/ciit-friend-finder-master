import { View, Text, StyleSheet, ScrollView, Pressable, Modal, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Landing({ goTo }) {
    {/* for toggling */}
    const [visible, changeVisibility] = useState(false);


    {/* storing selected filter options */}
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


    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <View>
                    <Pressable onPress={toggleFilter} style={{ marginRight:15}}><Ionicons name="filter-sharp" size={24} color="black" /></Pressable>
                </View>
                    
                
                    <Modal transparent={true} visible={visible} onRequestClose={toggleFilter}>
                        <View style={styles.overlay}>
                            
                            <TouchableOpacity style = {{position: 'absolute', top: 0,  bottom: 0, left: 0, right: 0}} onPress={toggleFilter} />

                            <View style={styles.filter}>
                         
                                <Text style={styles.filterHeading}>Filter by:</Text>

                                {/* for filtering course */}
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
                                <View style = {{flexDirection: 'row'}}>
                                    {/* for filtering year */}
                                    <View style = {{flexDirection: 'column', flex: 1}}>
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
                                    {/* for filtering lf */}
                                    <View style = {{flexDirection: 'column', flex: 1}}>
                                        <Text>Connection Intent</Text>
                                        <View style={{ marginVertical: 5 }}>
                                        {Object.keys(selectedLf).map(intent => (
                                            <TouchableOpacity
                                            key={intent}
                                            onPress={() => toggleSelection('intent', intent)}
                                            style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}
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
                                <View style={{ flexDirection: 'row', justifyContent: 'center', gap:10 }}>
                                    <Pressable onPress={clear} style={{ backgroundColor: '#ebebebff', padding: 10, paddingInline: 30, borderRadius: 30 }}>
                                        <Text style = {{ fontFamily: 'HelveticaNeueRoman'}}>Clear</Text>
                                    </Pressable>
                                    <Pressable onPress={apply} style={{ backgroundColor: '#F83758', padding: 10, paddingInline: 30, borderRadius: 30}}>
                                        <Text style={{ color: 'white',  fontFamily: 'HelveticaNeueRoman' }}>Apply</Text>
                                    </Pressable>
                                </View> 
                            </View>

                        </View>
                    </Modal>
                    
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row'}}>
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
                                <Text style={{color: 'white', fontSize: 12,  fontFamily: 'HelveticaNeueRoman' }}>{filter}</Text>
                            </View>
                            ))}
                        </View>
                    </ScrollView>
                    
                
                </View>

                <ScrollView style = {styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

                    <View style = {styles.card}>
                        <Text style = {styles.nickname}>Nickname, <Text style = {styles.age}>19</Text></Text>
                        <View style = {styles.bioContain}>
                            <Text style = {styles.bio}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Text>
                        </View>
                        <Text style = {styles.labels}>About Me</Text>
                        <View style = {styles.aboutmecontain}>
                            <View style = {styles.aboutmeparent}>
                                <Text style = {styles.aboutmechild}>She/Her</Text>
                            </View>
                            <View style = {styles.aboutmeparent}>
                                <Text style = {styles.aboutmechild}>Second Year</Text>
                            </View>
                            <View style = {styles.aboutmeparent}>
                                <Text style = {styles.aboutmechild}>BMMA - Graphic Design</Text>
                            </View>
                        </View>
                        <View style = {styles.bioContain}>
                            <Text style = {styles.labels}>Interests</Text>
                            <Text style = {styles.bio2}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Text>
                        </View>
                        <View style = {styles.bioContain}>
                            <Text style = {styles.labels}>Hobbies</Text>
                            <Text style = {styles.bio2}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Text>
                        </View>
                        <View style = {styles.bioContain}>
                            <Text style = {styles.labels}>Looking For</Text>
                            <Text style = {styles.bio2}>
                                Looking for a study buddy!
                            </Text>
                        </View>
                    </View>
            
                    <View style = {styles.common}>
                        <Text style = {styles.commonHeading}>Things we can bond over: </Text>
                        <View style = {styles.listCommon}>
                            <View style = {styles.itemCommon}>
                                <Text>Year</Text>
                            </View>
                            <View style = {styles.itemCommon}>
                                <Text>Course</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style = {styles.navbar}>
                    <View style = {styles.selectedNav}>
                        <MaterialCommunityIcons name="cards" size={35} color="white" />
                        <Text style = {{color: 'white'}}>Meet</Text>
                    </View>
                    
                    <FontAwesome name="wechat" size={30} color="#FCA5B4"/>
                    <Pressable onPress={() => goTo('notifications')} ><Ionicons name="notifications" size={30} color="#FCA5B4" /></Pressable>
                    <Pressable onPress = {() => goTo('account')}><MaterialCommunityIcons name="account" size={30} color="#FCA5B4" /></Pressable>
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
    /*preview*/

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
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3
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
        marginTop: 8 ,
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

    /* end of card */
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
        shadowOpacity:  0.17,
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
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