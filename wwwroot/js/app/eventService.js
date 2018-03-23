function eventService($http) {

    function getAllEvents() {
        return $http.get('api/event/');
    }

    function getEvent(id) {
        return $http.get('api/event/' + id);
    }

    function postEvent(eventClass) {
        return $http.post('api/event/add/', eventClass);
    }

    function putEvent(id,eventClass) {
        return $http.put('api/event/edit/' + id, eventClass);
    }

    function deleteEvent(id) {
        return $http.delete('api/event/delete/' + id);
    }

    return {
        getAll: getAllEvents,
        getFoo: getEvent,        
        postFoo: postEvent,
        putFoo: putEvent,
        deleteFoo: deleteEvent
    };
}

function eventClass() {

    function EventClass() {
        this.id = 0;
        this.eventCode = '';
        this.eventName = '';
        this.venue = '';
        this.eventStartDate = '';
        this.eventEndDate = '';
    }
    
    EventClass.build = function (dto) {
        console.log("EventClass.build : " + dto);
        var eventClass = new EventClass();
        if (!dto)
            return eventClass;

        eventClass.id = dto.id;
        eventClass.eventCode = dto.eventCode;
        eventClass.eventName = dto.eventName;
        eventClass.venue = dto.venue;
        eventClass.eventStartDate = dto.eventStartDate;
        eventClass.eventEndDate = dto.eventEndDate;

        return eventClass;
    };


    return EventClass;
}

